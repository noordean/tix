import ReactOnRails from 'react-on-rails';

import HelloWorld from '../components/HelloWorld';
import EventPage from '../components/EventPage';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  EventPage
});
