import React from 'react';
import './app.css';
import crowdin from './images/crowdin.svg';
import github from './images/github.svg';
import steam from './images/steam.svg';
import youtube from './images/youtube.svg';

const AsyncImage = (props) => {
    const [loadedSrc, setLoadedSrc] = React.useState(null);
    React.useEffect(() => {
        setLoadedSrc(null);
        if (props.src) {
            const handleLoad = () => {
                setLoadedSrc(props.src);
            };
            const image = new Image();
            image.addEventListener('load', handleLoad);
            image.src = props.src;
            return () => {
                image.removeEventListener('load', handleLoad);
            };
        }
    }, [props.src]);
    if (loadedSrc === props.src) {
        return (
            <img {...props} alt="async loading"/>
        );
    }
    return null;
};

function App() {
  return (
    <div className="App">
      <div class="ncontent1">
        <a id="home"></a>
        <h1>Nickwasused</h1>
        <p>This is my Website!</p>
	    </div>
      <div class="ncontent2">
        <a id="portfolio"></a>
        <h1>My Portfolio</h1>
        <div class="grid2x2">
          <div class="box box1">
            <AsyncImage src={github} alt="github"/>
            <a href="https://github.com/Nickwasused" target="_blank" rel="noopener noreferrer"><p>Github | Coding</p></a>
          </div>
          <div class="box box2">
            <AsyncImage src={youtube} alt="youtube"/>
            <a href="https://www.youtube.com/channel/UCsRLiy6MV4udCvbbcKBl5-g" target="_blank" rel="noopener noreferrer"><p>Youtube | Translating</p></a>
          </div>
          <div class="box box3">
            <AsyncImage src={crowdin} alt="crowdin"/>
            <a href="https://crowdin.com/profile/nickwasused" target="_blank" rel="noopener noreferrer"><p>Crowdin | Translating</p></a>
          </div>
          <div class="box box4">
            <AsyncImage src={steam} alt="steam"/>
            <a href="https://github.com/Nickwasused/FreeGamesonSteam" target="_blank" rel="noopener noreferrer"><p>FreeGamesonSteam</p></a>
          </div>
        </div>
      </div>
      <div class="ncontent3">
        <a id="contact"></a>
        <h1>Contact</h1>
        <p>Email (Long response time!): <a href="mailto:nickwasused.social@protonmail.com">Here!</a></p>
        <div class="pgp">
          <p class="pgp">
            -----BEGIN PGP PUBLIC KEY BLOCK-----<br/>
            Version: OpenPGP.js v4.10.1<br/>
            Comment: https://openpgpjs.org<br/>
            <br/>
            xjMEXqwHsRYJKwYBBAHaRw8BAQdABNVUVMxtl83nJopKT6Y4ZVSnEA0sPCx+<br/>
            pQW8+ekAFRrNRW5pY2t3YXN1c2VkLnNvY2lhbEBwcm90b25tYWlsLmNvbSA8<br/>
            bmlja3dhc3VzZWQuc29jaWFsQHByb3Rvbm1haWwuY29tPsJ4BBAWCgAgBQJe<br/>
            rAexBgsJBwgDAgQVCAoCBBYCAQACGQECGwMCHgEACgkQWBkqd2ewSW6dcgEA<br/>
            q4qf7BrbQIpUiCF/vYSTvEYzJRNsXBB6LxZqQwHytsMA+gOJ40VxfzD4sBUW<br/>
            VdgrCQqe+hT03aDutqSW/Hod9DgMzjgEXqwHsRIKKwYBBAGXVQEFAQEHQPRJ<br/>
            +3rRZr0gWXdQlXGNL1sXKky3ha18NVC4Z8pNmTFCAwEIB8JhBBgWCAAJBQJe<br/>
            rAexAhsMAAoJEFgZKndnsEluHLYA/1ULrP+gdpI4f3Qa1OV6UzaEqpMFjp8M<br/>
            LMDMEjKwf+BvAQC4A43Lo0nlzeQVv0lZORBcq1StMI3qq8elMA/I8uFHBw==<br/>
            =7a+l<br/>
            -----END PGP PUBLIC KEY BLOCK-----<br/>
          </p>
        </div>
        <p>Twitter: <a href="https://twitter.com/Nickwasused" target="_blank" rel="noopener noreferrer">Nickwasused</a></p>
        <p>Keybase: <del>Nickwasused</del></p>
		  </div>
    </div>
  );
}

export default App;
