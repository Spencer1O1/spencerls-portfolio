import "./App.css";
import { FloatingNavbar } from "./components/FloatingNavbar";
import { NavItem } from "./components/navbar/NavItem";
import { NavSection } from "./components/navbar/NavSection";
import logo from "./res/logo.svg";

function App() {
	return (
		<div className="App">
			<div className="container">
				<FloatingNavbar>
					<NavSection right>
						<NavItem>
							<img src={logo} className="logo" alt="logo" />
						</NavItem>
						<NavItem>
							<p>SpencerLS</p>
						</NavItem>
					</NavSection>
					<NavSection grow>
						<NavItem>
							<p>About Me</p>
						</NavItem>
						<NavItem>
							<p>My Mission</p>
						</NavItem>
						<NavItem>
							<p>Programming Skills</p>
						</NavItem>
						<NavItem>
							<p>Contact</p>
						</NavItem>
					</NavSection>
				</FloatingNavbar>
			</div>
			{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
		</div>
	);
}

export default App;
