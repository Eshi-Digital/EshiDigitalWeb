import CardText from '../cardText';
import ProfileCard from '../profileCard';


const teamMembersObj = [
  {
    imgPath: 'assets/images/team/fireayehu.jpeg',
    title: 'Fireayehu Zekarias',
    profession: 'CEO',
    facebookLink: 'https://www.facebook.com/fireayehu.zekarias',
    instagramLink: 'https://www.instagram.com/fireayehu/',
    linkedinLink: 'https://www.linkedin.com/in/fireayehu-zekarias-b82576106/',
  },
  {
    imgPath: 'assets/images/team/rediet.png',
    title: 'Rediet Mengiste',
    profession: 'CDO',
    facebookLink: '',
    instagramLink: 'https://www.instagram.com/rediet_mengiste/',
    linkedinLink: 'https://www.linkedin.com/in/rediet-mengiste-0b5ba71b9/',
  },
  {
    imgPath: 'assets/images/team/abenezer.jpeg',
    title: 'Abenezer Atnafu',
    profession: 'CFO',
    facebookLink: 'https://www.facebook.com/abene.atnafu',
    instagramLink: 'https://www.instagram.com/abenealayu/',
    linkedinLink: 'https://www.linkedin.com/in/abenezer-atnafu/',
  },
  {
    imgPath: 'assets/images/team/betsi.jpeg',
    title: 'Betselot Getnet',
    profession: 'CMO',
    facebookLink: '',
    instagramLink: 'https://www.instagram.com/sassybgs/',
    linkedinLink: 'https://www.linkedin.com/in/betselot-getnet-2423561aa/',
  },
  {
    imgPath: 'assets/images/team/michael.jpg',
    title: 'Michael Solomon',
    profession: 'CTO',
    facebookLink: 'https://www.facebook.com/profile.php?id=100007650707074',
    instagramLink: 'https://www.instagram.com/ruphael1146/',
    linkedinLink: 'https://www.linkedin.com/in/michaela3ba171aa/',
  },
  {
    imgPath: 'assets/images/team/semere.jpeg',
    title: 'Semere Talegngeta',
    profession: 'COO',
    facebookLink: 'https://www.facebook.com/semere.talegn/',
    instagramLink: 'https://www.instagram.com/semere627/',
    linkedinLink: 'https://www.linkedin.com/in/semere-talegngeta/',
  },
];

const TeamMembers = () => {
  return (
    <>
      <section className="team-section position-relative">
        <img
          class="pattern"
          src="assets/images/team/pattern.png"
          alt="images-not_found"
        />

        <div className="container">
          <div className="row">
            <CardText
              textClass={'title text-white'}
              circleImgPath={'assets/images/icon/team.png'}
              content={'Amazing Team Members'}
            ></CardText>
          </div>

          <div className="row mb-n7">
            {teamMembersObj.map((teamMember, index) => {
              return (
                <ProfileCard
                  imgPath={teamMember.imgPath}
                  title={teamMember.title}
                  profession={teamMember.profession}
                  facebookLink={teamMember.facebookLink}
                  instagramLink={teamMember.instagramLink}
                  linkedinLink={teamMember.linkedinLink}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMembers;
