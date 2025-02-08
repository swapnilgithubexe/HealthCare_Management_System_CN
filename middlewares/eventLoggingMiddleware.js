import logger from "../utils/logger.js";

const logEvent = (req, res, next) => {
  const { email, role, patientId, doctorId } = req.body;

  //Event mapping
  const eventMap = {

    //Doctor related events
    "/api/doctor/register": `Doctor registered: ${email}`,

    //Patient related events
    "/api/patient/register": `Patient registered: ${email}`,

    //Appointment related events
    "/api/appointment/book": `Appointment booked by ${email} with doctor ${doctorId}`,

    "/api/appointment/cancel": `Appointment has been cancel for patient: ${email}`,

    //Medical records related events
    "/api/medical-records/add": `Medical reports added for patient: ${patientId}`,
    "/api/medical-records/update": `Medical reports has been modified for patient: ${patientId}`

  };

  //logging
  const message = eventMap[req.path];
  if (message && req.method === "POST") {
    logger.info(message)
  }

  next();
}

export default logEvent;