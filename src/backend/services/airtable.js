import Airtable from 'airtable';
// import 'dotenv/config.js';

const token = import.meta.env.VITE_TOKEN;
const baseId = import.meta.env.VITE_BASE_ID;

const base = new Airtable({ apiKey: token }).base(baseId);

export default base;
