var memberData=[
   
    {
        name:"Ibtisam Ahmed",
        designation:"CEO",
        desc:"A Blockchain Enthusiast, Full Stack Developer, Laser Physicist and always eager to learn new technologies. A Jack of all trades.",
        imgPath:"./img/ibti-white.png",
        fb:"https://www.facebook.com/ibtisam.ahmed.96",
        tweeter:"https://twitter.com/Ibtisamahmed11",
        linkedin:"https://www.linkedin.com/in/ibtisam-ahmed-42447211a/",
    },
    {
        name:"Zeeshan Abbasi",
        designation:"CTO",
        desc:"The next great disruption is knocking the door of the human civilization. mParsec is all about the latest and the greatest technologies that will help you survive and thrive the disruption with the most bleeding edge technologies. From IoT to Cloud Computing and all the way to Blockchain we got it covered.",
        imgPath:"./img/ZA-White.jpg",
        fb:"#",
        tweeter:"https://twitter.com/abbasi_z",
        linkedin:"https://www.linkedin.com/in/zeeshan-abbasi/",
    },
    {
        name:"Farrukh Kiani",
        designation:"Advisor",
        desc:"",
        imgPath:"./img/FK-WHITE.jpg",
        fb:"#",
        tweeter:"#",
        linkedin:"https://www.linkedin.com/in/farrukhkiani/",
    },
    {
        name:"Danial Naeem ",
        designation:"Content Creator",
        desc:"",
        imgPath:"./img/DN-WHITE.jpg",
        fb:"#",
        tweeter:"#",
        linkedin:"https://www.linkedin.com/in/danial-naeem-joya-2536b8179/",
    },
    {
        name:"Waqar Zaka",
        designation:"Founder",
        desc:"Waqar Zaka is a well-known crypto entrepreneur who is recognized for mentoring blockchain developers in Pakistan. Many people in Pakistan know of him because of his work founding the Technology Movement Pakistan, An initiative designed to raise awareness about the importance of coding and blockchain development among the country's female population. For his work in the tech industry and his dedication to the Urdu-speaking community, Waqar Zaka has gained a large following. After he submitted a petition, he was the driving force behind the lifting of the ban on cryptocurrency in Pakistan. He attended Pakistan's most prestigious engineering university, the NED University of Engineering and Technology, and graduated with an engineering degree.",
        imgPath:"./img/WZ-WHITE.jpg",
        fb:"https://m.facebook.com/waqarzaka",
        tweeter:"https://twitter.com/ZakaWaqar",
        linkedin:"#linked",
    },
]

var memberImage = document.getElementById('memberImage')
var memberFb = document.getElementById('memberfb')
var memberTweeter = document.getElementById('membertweeter')
var memberLinked = document.getElementById('memberLinkedin')

// default set member social url
var member1Fb = document.getElementById('member1Fb').href=memberData[0].fb
var member1Tweeter = document.getElementById('member1Tweeter').href=memberData[0].tweeter
var member1Linked = document.getElementById('member1Linked').href=memberData[0].linkedin
var member2Fb = document.getElementById('member2Fb').href=memberData[1].fb
var member2Tweeter = document.getElementById('member2Tweeter').href=memberData[1].tweeter
var member2Linked = document.getElementById('member2Linked').href=memberData[1].linkedin
var member3Fb = document.getElementById('member3Fb').href=memberData[2].fb
var member3Tweeter = document.getElementById('member3Tweeter').href=memberData[2].tweeter
var member3Linked = document.getElementById('member3Linked').href=memberData[2].linkedin
var member4Fb = document.getElementById('member4Fb').href=memberData[3].fb
var member4Tweeter = document.getElementById('member4Tweeter').href=memberData[3].tweeter
var member4Linked = document.getElementById('member4Linked').href=memberData[3].linkedin

// default set founder url
memberImage.src=memberData[4].imgPath
memberFb.href=memberData[4].fb
memberTweeter.href=memberData[4].tweeter
memberLinked.href=memberData[4].linkedin

function detectMember(member) {

    // set member nane in below ids
    var mainMemberName1=document.getElementById('mainMemberName1')
    var mainMemberdesignation1=document.getElementById('mainMemberdesignation1')
    var mainMemberName2=document.getElementById('mainMemberName2')
    var mainMemberdesignation2=document.getElementById('mainMemberdesignation2')
    var memberDesc=document.getElementById('memberDesc')

    if(member == "member1"){
       
        mainMemberName1.innerHTML=memberData[0].name
        mainMemberdesignation1.innerHTML=memberData[0].designation
        mainMemberName2.innerHTML=memberData[0].name
        mainMemberdesignation2.innerHTML=memberData[0].designation
        memberDesc.innerHTML=memberData[0].desc
        memberImage.src=memberData[0].imgPath
        memberFb.href=memberData[0].fb
        memberTweeter.href=memberData[0].tweeter
        memberLinked.href=memberData[0].linkedin
    }
    else if(member == "member2") {
        mainMemberName1.innerHTML=memberData[1].name
        mainMemberdesignation1.innerHTML=memberData[1].designation
        mainMemberName2.innerHTML=memberData[1].name
        mainMemberdesignation2.innerHTML=memberData[1].designation
        memberDesc.innerHTML=memberData[1].desc
        memberImage.src=memberData[1].imgPath
        memberFb.href=memberData[1].fb
        memberTweeter.href=memberData[1].tweeter
        memberLinked.href=memberData[1].linkedin
    }
    else if(member == "member3") {
        mainMemberName1.innerHTML=memberData[2].name
        mainMemberdesignation1.innerHTML=memberData[2].designation
        mainMemberName2.innerHTML=memberData[2].name
        mainMemberdesignation2.innerHTML=memberData[2].designation
        memberDesc.innerHTML=memberData[2].desc
        memberImage.src=memberData[2].imgPath
        memberFb.href=memberData[2].fb
        memberTweeter.href=memberData[2].tweeter
        memberLinked.href=memberData[2].linkedin
    }
    else if(member == "member4") {
        mainMemberName1.innerHTML=memberData[3].name
        mainMemberdesignation1.innerHTML=memberData[3].designation
        mainMemberName2.innerHTML=memberData[3].name
        mainMemberdesignation2.innerHTML=memberData[3].designation
        memberDesc.innerHTML=memberData[3].desc
        memberImage.src=memberData[3].imgPath
        memberFb.href=memberData[3].fb
        memberTweeter.href=memberData[3].tweeter
        memberLinked.href=memberData[3].linkedin
    }
}
