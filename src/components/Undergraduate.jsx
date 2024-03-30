import React from 'react'
import underPdf from  '../assets/Undergraduate.pdf'

export default function Undergraduate({program}) {
    const handleDownload = () => {
        const pdfFilepath = underPdf
        window.open(pdfFilepath, "_blank");
    }
  return (
    <div className={!program ? 'undergraduate degree':'undergraduate'}>
        <p>UNDERGRADUATE ADMISSION REQUIREMENTS AND GENERAL INFORMATION</p>
        <div className='admission'>
            <p>Admission requirement</p>
            <p>For Bachelors degree in Systems Engineering, a student must pass a minimum total number of units as follows:</p>
            <ul>
                <li>UTME - 175 units</li>
                <li>200L Direct Entry - 151units</li>
            </ul>
        </div>
        <div className='general-infomation'>
            <p>General Information </p>
            <p>Registration</p>
            <ul>
                <li>The candidate signs and returns his/her letter of acceptance as he/she is admitted. Registration of the candidate then commences (see Figure 1). After registration the candidate is then qualified to be refereed to as a student of the University of Lagos.Admission into the B.Sc. programme could be through: UME, University Foundation Programme (Diploma II) or Direct Entry.</li>
                <li>UME applicants are required to have five credits at one sitting in the Senior School Certificate Examinations or equivalent (SSCE) – including Math, Further Math, Physics, Chemistry and English Language. In the weighted score from the UTME and Post-UME assessment, varying cut-off marks are categorized under: “Merit List”, “Catchment” and “Educationally Less Disadvantaged States (E.L.D.S.)”.</li>
                <li>DIPLOMA / JUPEB (Foundation) applicants: Students coming into the programme through Foundation program are expected to have an acceptable grade point aggregation on the completion of the programme.</li>
                <li>DIRECT ENTRY applicants: Students coming into the programme through DIRECT ENTRY are expected to have a CGPA of at least an “UPPER CREDIT” in OND / HND for entry into 200L & 300L respectively or Advanced Level passes in Mathematics, Physics and Chemistry for entrance into 200L.</li>
            </ul>
        </div>
        <div className='graduation-requirement'>
            <p>Graduation Requirement</p>
            <p>To be eligible for the award</p>
            <ul>
                <li>Online course registration starts at the beginning of each semester and ends three weeks into the semester.</li>
                <li>You are allowed to delete courses online without any consequences within the first seven weeks of a semester. Make sure that the course adviser is informed appropriately with such changes.</li>
                <li>There is no provision for withdrawal after the seventh week. Such a case can only be approved by the senate.</li>
            </ul> 
        </div>
        <div className='btn-container'>
            <button onClick={handleDownload}>Download Pdf</button>
        </div> 
    </div>
  )
}
