import React from 'react'
import './_footer.scss'

function Footer() {

  return (
    
    <footer>

    <div className="grid-foot">

        <div className="spanes">
            <span>Rrhhvenecia@gmail.com</span>
            <span> +54 358-4877893</span>
        </div>

            <div className="footer-content-container">
                <a href="#" className="menu-item-footer">Terms and Conditions for Cookies</a>
            </div>

        <div className="copyright-container">
            <span className="copyright">&copy;2023 Lucas.com</span>
        </div>

    </div>

</footer>
  )
}

export default Footer