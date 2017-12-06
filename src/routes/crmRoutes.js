import { 
  addNewContact, 
  getContacts, 
  getContactWithId, 
  updateContact,
  deleteContact
} from '../controllers/crmController'

const routes = (app) => {
  app.route('/contact')
  .get((req, res, next) => {
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request from: ${req.method}`)
    next()    
  }, getContacts
  // (req, res, next) => {
  //   res.send('GET request successfull!!!');
  // }
  )

  // POST endpoint
  .post(addNewContact);


  app.route('/contact/:contactId')
  .get(getContactWithId)
  .put(updateContact)
  .delete(deleteContact);

}

export default routes;