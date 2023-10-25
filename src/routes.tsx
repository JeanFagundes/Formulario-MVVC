import InitialPage from 'pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<InitialPage />} />
			</Routes>
		</Router>
	);
}
export default App;
