import React from "react";
import styled from 'styled-components';
import '../Styles/footer.css'


  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row class = "p1">
          <Column>
          <h1 id='footer-header'>Useful Links</h1>
            < a id="footer-li" id='url-link' href="#/">About DBS</a>
            < a id="footer-li" id='url-link' href="/home ">Investoer Relations</a>
            < a id="footer-li" id='url-link' href="/home">Disclaimer & Important Notice</a>
            
          </Column>
          <Column>
          <h1 id='footer-header'>Others</h1>
            <a id="footer-li" id='url-link' href="/">Forms</a>
            <a id="footer-li" id='url-link' href="/">Rates</a>
            <a id="footer-li" id='url-link' href="/">Tools</a>
            <a id="footer-li" id='url-link' href="/">Update Personal Particulars</a>
          </Column>

          <Column>
          <h1 id='footer-header'>Need Help?</h1>
            <a id="footer-li" id='url-link' href="/">Help & Support Portal</a>
            <a id="footer-li" id='url-link' href="/">Phone - 1800 111 1111</a>
            <a id="footer-li" id='url-link' href="/">Email </a>
            <a id="footer-li" id='url-link' href="/">Get In Touch with Us</a>
          </Column>
          <Column>
          <h1 id='footer-header'>Markets</h1>
            <a id="footer-li" id='url-link' href="/">Singapore</a>
            <a id="footer-li" id='url-link' href="/">Hong Kong</a>
            <a id="footer-li" id='url-link' href="/">India</a>
            <a id="footer-li" id='url-link' href="/">Taiwan</a>
          </Column>
        </Row>
      </Container>
      <div className = "btm-footer">
            <ol className="btm-footer-ol">
              <li id="btm-footer-li"> <a id='url-link' href="https://www.dbs.com/terms/default.page" style = {{fontSize: "10px"}}>Terms & Conditions</a> </li>
              <li id="btm-footer-li"> <a id='url-link' href="https://www.dbs.com/privacy/default.page"style = {{fontSize: "10px"}}>Privacy policy</a> </li>
              <li id="btm-footer-li"> <a id='url-link' href="https://www.dbs.com/fairdealing/default.page"style = {{fontSize: "10px"}}>Fair Dealing commitment</a> </li>
              <li id="btm-footer-li"> <a id='url-link' href="https://www.dbs.com.sg/personal/compliance-tax-requirements/index.html"style = {{fontSize: "10px"}}>Compliance with Tax Requirements</a> </li>
              <li id="btm-footer-li"> <a id='url-link' href="https://www.dbs.com.sg/personal/default.page?pid=sg-dbs-ib-login-txtlink-dbsbank"style = {{fontSize: "10px"}}>©2019 DBS Bank Ltd. Co. Reg. No. 196800306E
                  </a> </li>
            </ol>
          </div>
    </Box>



      



  );
};


const Box = styled.div`

  background: #484848;
  width: 100%;
  position:absolute;
  left:0;
  bottom:0;
  right:0;
  flex-direction: column;
  justify-content: center;
  z-index:999;
  
  
  
`;
   
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    padding-bottom:10px;
    text-align: left;
    
    
`
   
const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  width:90%
  
`;
   
const Row = styled.div`
  display: grid;
  
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
   
 /* const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`; */

export default Footer;