const FooterSection = () => {
    return(
        <footer className="footer">
            <div className="footer__list">
                <a className="footer__item">Meta</a> 
                <a className="footer__item">About</a> 
                <a className="footer__item">Blog</a> 
                <a className="footer__item">Jobs</a> 
                <a className="footer__item">Help</a> 
                <a className="footer__item">API</a> 
                <a className="footer__item">Privacy</a> 
                <a className="footer__item">Terms</a> 
                <a className="footer__item">Top Accounts</a> 
                <a className="footer__item">Hashtags</a> 
                <a className="footer__item">Locations</a> 
                <a className="footer__item">Instagram Lite</a> 
            </div>
            <span className="footer__copy">&copy; Instagram from Meta</span>
        </footer>
    )
}

export { FooterSection }