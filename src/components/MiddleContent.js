import React from 'react'
import Options from './Options'
import BookingComp from './BookingComp'
import Services from './Services'
import CustReview from './CustReview'
import Doctor from './Doctor'

function MiddleContent() {
  return (
    <div class="midSec">

        <BookingComp />

        <div class="options">
          <Options name={"patient and visitors guide ➡️"} img={"../resources/cont-img.jpeg"} />
          <Options name={"Find the best doctor ➡️"} img={"../resources/cont-img.jpeg"} />
          <Options name={"Ask your. questions ➡️"} img={"../resources/cont-img.jpeg"} />

        </div>

        <div class="serv">
      <div class="container_px-4_text-center">
            <Services service={"General Health Care"} desc={"dsjvbajdsjvabhjdjhbdfjjhgfjadbsvjhbdsvjhadsvjbdjbvjdfbhbadjvajhdfdgbsjadgjasdbvjsdgv"} />
            <Services service={"Dental Service"} desc={"dsjvbajdgbsjadgjasdbvjsdgvjjhgfjadbsvjhbdsvjhadsvjbdjbvjdfbhbadjvajhdfdgbsjadgjasdbvjsdgv"} />
            <Services service={"Orthopedics"} desc={"dsjvbajdgbsjadgjasdbvjsdgvjjhgfjadbsvjhbdsvjhadsvjbdjbvjdfbhbadjvajhdfdgbsjadgjasdbvjsdgv"} />
            <Services service={"Rhynoplasty"} desc={"dsjvbajdgbsjadgjasdbvjsdgvjjhgfjadbsvjhbdsvjhadsvjbdjbvjdfbhbadjvajhdfdgbsjadgjasdbvjsdgv"} />
            <Services service={"Hair Transplant"} desc={"dsjvbajdgbsjadgjasdbvjsdgvjjhgfjadbsvjhbdsvjhadsvjbdjbvjdfbhbadjvajhdfdgbsjadgjasdbvjsdgv"} />
            <Services service={"FaceList Surgery"} desc={"dsjvbajdgbsjadgjasdbvjsdgvjjhgfjadbsvjhbdsvjhadsvjbdjbvjdfbhbadjvajhdfdgbsjadgjasdbvjsdgv"} />
          </div>
        </div>
        <div class="container px-4 text-center">
            <div class="row gx-5">
                    <div class="p-3 border bg-light">
                    <Services service={"General Health Care"} desc={"dsjvbajdsjvabhjdjhbdfjjhgfjadbsvjhbdsvjhadsvjbdjbvjdfbhbadjvajhdfdgbsjadgjasdbvjsdgv"}/>
                    <Services service={"Dental Service"} desc={"dsjvbajdgbsjadgjasdbvjsdgvjjhgfjadbsvjhbdsvjhadsvjbdjbvjdfbhbadjvajhdfdgbsjadgjasdbvjsdgv"}/>
                    <Services service={"Orthopedics"} desc={"dsjvbajdgbsjadgjasdbvjsdgvjjhgfjadbsvjhbdsvjhadsvjbdjbvjdfbhbadjvajhdfdgbsjadgjasdbvjsdgv"}/>
                    <Services service={"Rhynoplasty"} desc={"dsjvbajdgbsjadgjasdbvjsdgvjjhgfjadbsvjhbdsvjhadsvjbdjbvjdfbhbadjvajhdfdgbsjadgjasdbvjsdgv"}/>
                    <Services service={"Hair Transplant"} desc={"dsjvbajdgbsjadgjasdbvjsdgvjjhgfjadbsvjhbdsvjhadsvjbdjbvjdfbhbadjvajhdfdgbsjadgjasdbvjsdgv"}/>
                    <Services service={"FaceList Surgery"} desc={"dsjvbajdgbsjadgjasdbvjsdgvjjhgfjadbsvjhbdsvjhadsvjbdjbvjdfbhbadjvajhdfdgbsjadgjasdbvjsdgv"}/>
                    </div>
            </div>
          </div>

          <button type="button" class="btn btn-info">Show more</button>

          <h1 class="heading">Meet Our Expert Doctors</h1>
          <Doctor img={"../resources/cont-img.jpeg"} name={"Anshuman"} field={"Ortho"} />
          <Doctor img={"../resources/cont-img.jpeg"} name={"Ajit"} field={"Heart"} />
          <Doctor img={"../resources/cont-img.jpeg"} name={"Rishabh"} field={"Guptrog"} />

          <h1 class="heading">Customer About Us</h1>
          <CustReview img={"../resources/cont-img.jpeg"} name={"Anshu"} review={"lorem jav jbgf sjadhgvj fdkj vdjafkhb"} rating={"3"}/>
          <CustReview img={"../resources/cont-img.jpeg"} name={"Anshu"} review={"lorem jav jbgf sjadhgvj fdkj vdjafkhb"} rating={"3"}/>
          <CustReview img={"../resources/cont-img.jpeg"} name={"Anshu"} review={"lorem jav jbgf sjadhgvj fdkj vdjafkhb"} rating={"3"}/>
          <CustReview img={"../resources/cont-img.jpeg"} name={"Anshu"} review={"lorem jav jbgf sjadhgvj fdkj vdjafkhb"} rating={"3"}/>
        
      </div>


  )
}

export default MiddleContent