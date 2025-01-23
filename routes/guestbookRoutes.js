const express = require('express');
const router = express.Router();
const controller = require('../controllers/guestbookControllers.js');

router.get("/", controller.landing_page);
router.get('/guestbook', controller.entries_list);
router.get("/about", controller.about_page);
router.get('/peter', controller.peters_entries);
router.get('/new', controller.new_entries);
router.post('/new', controller.post_new_entry);
router.get('/posts/:author', controller.show_user_entries);
router.use(controller.not_found);
router.use(controller.server_error);

module.exports = router;