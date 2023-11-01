import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1>Terms and Conditions</h1>

            <p>Welcome to our newspaper website ("Website"). If you continue to browse and use this Website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this Website. If you disagree with any part of these terms and conditions, please do not use our Website.</p>

            <h2>1. The use of this Website is subject to the following terms of use:</h2>

            <p>- The content of the pages of this Website is for your general information and use only. It is subject to change without notice.</p>
            <p>- This Website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties: [insert list of information].</p>
            <p>- Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this Website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</p>
            <p>- Your use of any information or materials on this Website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this Website meet your specific requirements.</p>

            <h2>2. Unauthorised use of this Website may give rise to a claim for damages and/or be a criminal offense.</h2>

            <h2>3. From time to time, this Website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</h2>

            <h2>4. Your use of this Website and any dispute arising out of such use of the Website is subject to the laws of [Your Country].</h2>

            <p>The content of the pages of this Website is for your general information and use only. It is subject to change without notice.</p>

            <p>This terms and conditions page is for informational purposes only and does not constitute legal advice. Please consult with legal counsel for specific legal advice.</p>

            <br />

            <p>Go back to <Link to = '/register'>Register</Link> </p>

        </div>
    );
};

export default Terms;