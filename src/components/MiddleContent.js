import React from 'react'
import Options from './Options'
import BookingComp from './BookingComp'
import Services from './Services'

function MiddleContent() {
  return (
    <div>
        <BookingComp />

        <div class="options">
          <Options name={"patient and visitors guide ➡️"} img={"../resources/cont-img.jpeg"}/>
          <Options name={"Find the best doctor ➡️"} img={"../resources/cont-img.jpeg"}/>
          <Options name={"Ask your questions ➡️"} img ={"../resources/cont-img.jpeg"}/>

        </div>

        <BookingComp />

        <Services service={"General Health Care"} desc={"dsjvbajdsjvabhjdjhbdfjjhgfjadbsvjhbdsvjhadsvjbdjbvjdfbhbadjvajhdfdgbsjadgjasdbvjsdgv"}/>
        <Services service={"Dental Service"} desc={"dsjvbajdgbsjadgjasdbvjsdgvjjhgfjadbsvjhbdsvjhadsvjbdjbvjdfbhbadjvajhdfdgbsjadgjasdbvjsdgv"}/>
        <Services service={"Orthopedics"} desc={"dsjvbajdgbsjadgjasdbvjsdgvjjhgfjadbsvjhbdsvjhadsvjbdjbvjdfbhbadjvajhdfdgbsjadgjasdbvjsdgv"}/>
        <Services service={"Rhynoplasty"} desc={"dsjvbajdgbsjadgjasdbvjsdgvjjhgfjadbsvjhbdsvjhadsvjbdjbvjdfbhbadjvajhdfdgbsjadgjasdbvjsdgv"}/>
        <Services service={"Hair Transplant"} desc={"dsjvbajdgbsjadgjasdbvjsdgvjjhgfjadbsvjhbdsvjhadsvjbdjbvjdfbhbadjvajhdfdgbsjadgjasdbvjsdgv"}/>
        <Services service={"FaceList Surgery"} desc={"dsjvbajdgbsjadgjasdbvjsdgvjjhgfjadbsvjhbdsvjhadsvjbdjbvjdfbhbadjvajhdfdgbsjadgjasdbvjsdgv"}/>
    </div>
  )
}

export default MiddleContent