const formId = '1FAIpQLSc1dC8_PtgI1h2ME98BnOs5glmAgmdJZPVn8hjfTGfLrghh4g';
const name = 'entry.1416175159';
const message = 'entry.1043962540';
const urlPOST = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

let sheetId = `1qdVrK6o2RDr6HNWYJBoBCTYDKcM59IDH7mX_jFxvv14`;
const key = 'AIzaSyBrK3NGKzbV2jIlNk1LrVcd2T7_k0ahyk4'
const sheet = encodeURIComponent('Form Responses 1');
const urlGET = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheet}?key=${key}`;