import React from 'react'
import kristine from '../../assets/images/kristine-palmer.png'
import mark from '../../assets/images/mark-aubri.png'
import kimberly from '../../assets/images/kimberly-hansen.png'
import justin from '../../assets/images/justin-willoman.png'
import TeamMember from './TeamMember'
import SectionTiltle from '../Generics/SectionTiltle'
import Button from '../Generics/Button'


const TeamSection = () => {

    const members = [
        {imgSrc: kristine, imgAlt: "Kristine Palmer", memberName: "Kristine Palmer", memberPosition: "Chef Operation Officer"},
        {imgSrc: mark, imgAlt: "Mark Aubri", memberName: "Mark Aubri", memberPosition: "Senior Consultant"},
        {imgSrc: kimberly, imgAlt: "Kimberly Hansen", memberName: "Kimberly Hansen", memberPosition: "Senior Consultant"},
        {imgSrc: justin, imgAlt: "Justin Willoman", memberName: "Justin Willoman", memberPosition: "Senior Tech Consultant"}
    ]
  
return (
    <div className="team-section">
        <div className="container section-padding">
            <div className="title">
                <SectionTiltle title="Meet Our Team" description="Experience Team Members" />
                
                <div className="content-center">
                    <Button type="yellow" url="/service" title="Browse Team" />
                </div>
            </div>

            <div className="team-members">
                {
                    members.map((member, index)=>(
                        <TeamMember key={index} 
                        imgSrc={member.imgSrc}
                        imgAlt={member.imgAlt}
                        memberName={member.memberName}
                        memberPosition={member.memberPosition} />
                    ))}
            </div>
        </div>
    </div>
  )
}

export default TeamSection