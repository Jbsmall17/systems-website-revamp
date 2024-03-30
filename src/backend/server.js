import {
  isRequestBodyEmpty, populationFormat, newsFormat, 
  projectsFormat, alumniFormat, galleryFormat, staffFormat, 
  admissionsFormat, storiesFormat, questionBank,
} from './services/helper.js';

// import { createOTP, verifyOTP, isAuth } from './services/auth.js';

// import { mailService } from './services/mailservice.js';

import base from './services/airtable.js';

const population = base(import.meta.env.VITE_POPULATION_ID);
const news = base(import.meta.env.VITE_NEWS_ID)
const projects = base(import.meta.env.VITE_PROJECTS_ID)
const alumni = base(import.meta.env.VITE_ALUMNI_ID)
const gallery = base(import.meta.env.VITE_GALLERY_ID)
const staff = base(import.meta.env.VITE_STAFF_ID)
const admissions = base(import.meta.env.VITE_ADMISSION_ID)
const stories = base(import.meta.env.VITE_STORIES_ID)
const past_questions = base(import.meta.env.VITE_PASTQUESTIONS_ID)
const subscribers = base(import.meta.env.VITE_SUBSCRIBERS_ID)


async function fetchCount() {
    try {
        let records = await population.select().all();
        let data = records.map(populationFormat);
        return { status: 200, message: 'Population fetched successfully', data };
    } catch (error) {
        return { status: 500, message: 'Internal Server Error', error };
    }
}

async function fetchNews() {
    try {
        let records = await news.select({ sort: [{ field: 'Date', direction: 'asc' }] }).all();
        let data = records.map(newsFormat);
        return { status: 200, message: 'News fetched successfully', data };
    } catch (error) {
        return { status: 500, message: 'Internal Server Error', error };
    }
}


async function fetchProjects() {
    let records = await projects.select().all();
    let data = records.map(projectsFormat);
    return { status: 200, message: 'Projects fetched successfully', data };
}

async function searchProjects(searchQuery){
    if (!searchQuery)  return { status: 400, message: 'Please provide a valid search parameter' };
    let filter = {
        filterByFormula: `OR(
            FIND(LOWER('${searchQuery}'), LOWER({StudentName})),
            FIND(LOWER('${searchQuery}'), LOWER({Title}))
        )`
    };
    let records = await projects.select(filter).all()
    if (records.length === 0) return { status: 200, message: 'No project found', data: [] };
    let data = records.map(projectsFormat)
    return { status: 200, message: 'Projects fetched successfully', data };
}


async function fetchAlumni() {
    let records = await alumni.select().all();
    let data = records.map(alumniFormat)
    return { status: 200, message: 'Alumnis fetched successfully', data };
}

async function fetchGallery() {
    let records = await gallery.select({ sort: [{ field: 'S/N', direction: 'asc' }] }).all();
    let data = records.map(galleryFormat)
    return { status: 200, message: 'Gallery fetched successfully', data };
}

async function fetchStaffs() {
    let records = await staff.select({ sort: [{ field: 'S/N', direction: 'asc' }] }).all();
    let data = records.map(staffFormat)
    return { status: 200, message: 'Staffs fetched successfully', data };
}

async function admissionDetails() {
    let records = await admissions.select().all();
    let data = records.map(admissionsFormat)
    return { status: 200, message: 'Admission Details fetched successfully', data };
}

async function successStories() {
    let records = await stories.select().all();
    let data = records.map(storiesFormat)
    return { status: 200, message: 'Students success stories  fetched successfully', data };
}

async function fetchQuestions() {
    let records = await past_questions.select({ sort: [{ field: 'Session', direction: 'desc' }] }).all();
    let data = records.map(questionBank)
    return { status: 200, message: 'Past questions fetched successfully', data };
}

async function subscribe(email) {  
    if (isRequestBodyEmpty(email)) {
        return Promise.reject('Request body is empty');
    }
    // Check if email already exists
    try {
        const existingSubscriber = await base('Subscribers').select({
            filterByFormula: `LOWER(Email) = "${email.toLowerCase()}"`
        }).firstPage();
        if (existingSubscriber.length > 0) {
            return Promise.reject('Email is already subscribed');
        }
    } catch (err) {
        console.error(err);
        return Promise.reject('Internal Server Error');
    }

    return subscribers.create(email)
        .then((record) => {
            return 'Subscriber created';
        })
        .catch((err) => {
            console.error(err);
            return 'Unprocessable';
    });
}

async function sendOTP(matric) {  
    // let {matric} = req.body;
    const matricPattern = /^[1-9][1-9]0407[05][0-9][0-9]$/;

    try {
        if (!matricPattern.test(matric)) {
            throw new Error('Invalid Matric no');
            // return res.status(404).json({ message: 'Invalid Matric no' });
        }
        email = `${matric}@live.unilag.edu.ng`
        
        return createOTP(email)
    } catch (err) {
        console.error(err);
        return 'Internal Server Error';
    }}

async function validateOTP(otp) {  
    try {
        await verifyOTP(otp);
        // return { message: 'Access granted' };      
    } catch (err) {
        console.error(err);
        throw new Error('Invalid OTP');
        // return errorHandler(res, 500, 'Internal Server Error');
    }
}

async function createComplaint({ name, email, complaintText }) {
    // let { name, email, complaintText } = req.body;
    let sender = email;
    let recipient = import.meta.env.VITE_EMAILUSER;
    let subject = `Complaint`
    let text = `Name: ${name}\nEmail: ${email}\nComplaint: ${complaintText}`;
    try {
      message = "Complaint sent"
      await mailService(sender, recipient, subject, text, message)
    } catch (e) {
      console.error(e)
    //   res.status(422).json(e);
      throw new Error(e.message);
    }
} 


export {
    fetchCount, fetchNews, fetchProjects,
    searchProjects, fetchAlumni, fetchGallery,
    fetchStaffs, admissionDetails, successStories,
    fetchQuestions, subscribe,
    sendOTP, validateOTP, createComplaint,
};




