
import { useContext } from "react"
import { IGContext } from "../context/store"
import { HomePage } from "./01-page/HomePage"
import { ProfilePage } from "./01-page/ProfilePage"
import { ExplorePage } from "./01-page/ExplorePage"
import { ModalSection } from "./02-sections/ModalSection"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ScrollToTop } from "./00-helpers/ScrollToTop"
import "../scss/styles.scss"
import { NavbarSection } from "./02-sections/NavbarSection"

const App = () => {
	const { modal } = useContext(IGContext)
	const { open } = modal

	return(
	
		<BrowserRouter>
		 	<NavbarSection />
			<ScrollToTop />
			{ open && <ModalSection /> }
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/explore" element={<ExplorePage />} />
					<Route path="/profile" element={<ProfilePage />} />
				</Routes>
			</main>
		</BrowserRouter>
		
	)
}

export default App
