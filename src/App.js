import logo from './logo.svg';
import "@aws-amplify/ui-react/styles.css";
import {
withAuthenticator,
Button,
Heading,
Image,
View,
Card
} from "@aws-amplify/ui-react";
import { signOut } from 'aws-amplify/auth';

function App() {
  return (
    <div className="App">
      <Card>
        <Image src={logo} className='App-logo' alt='logo' />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
}

export default withAuthenticator(App);
