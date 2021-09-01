import CardText from '../cardText';
import ProfileCard from '../profileCard';

const teamMembersObj = [
  {
    imgPath: 'assets/images/team/fireayehu.jpeg',
    title: 'Fireayehu Zekarias',
    profession: 'CEO',
    twitterLink: 'https://twitter.com/Fireayehu',
    githubLink: 'https://github.com/fireayehu',
    linkedinLink: 'https://www.linkedin.com/in/fireayehu-zekarias-b82576106/',
    telegramLink: 'https://t.me/AfroBlackie',
  },
  {
    imgPath: 'assets/images/team/rediet.jpg',
    title: 'Rediet Mengiste',
    profession: 'CDO',
    twitterLink: '',
    githubLink: 'https://www.instagram.com/rediet_mengiste/',
    linkedinLink: 'https://www.linkedin.com/in/rediet-mengiste-0b5ba71b9/',
    telegramLink: 'https://t.me/Rediet_MKJ',
  },
  {
    imgPath: 'assets/images/team/abenezer.jpeg',
    title: 'Abenezer Atnafu',
    profession: 'CFO',
    twitterLink: 'https://www.facebook.com/abene.atnafu',
    githubLink: 'https://github.com/AbenezerAtnafu',
    linkedinLink: 'https://www.linkedin.com/in/abenezer-atnafu/',
    telegramLink: 'https://t.me/AbeneEshi',
  },
  {
    imgPath: 'assets/images/team/betsi.jpeg',
    title: 'Betselot Getnet',
    profession: 'CMO',
    twitterLink: 'https://twitter.com/Sassy_Bgs',
    githubLink: 'https://www.instagram.com/sassybgs/',
    linkedinLink: 'https://www.linkedin.com/in/betselot-getnet-2423561aa/',
    telegramLink: 'https://t.me/sassy_bgs',
  },
  {
    imgPath: 'assets/images/team/michael.jpg',
    title: 'Michael Solomon',
    profession: 'CTO',
    twitterLink: 'https://twitter.com/Michael55211394',
    githubLink: 'https://github.com/Michael-pi-max',
    linkedinLink: 'https://www.linkedin.com/in/michaela3ba171aa/',
    telegramLink: 'https://t.me/Ruphael',
  },
  {
    imgPath: 'assets/images/team/semere.jpeg',
    title: 'Semere Talegngeta',
    profession: 'COO',
    twitterLink: 'https://twitter.com/Semere627',
    githubLink: 'https://github.com/SemereT627',
    linkedinLink: 'https://www.linkedin.com/in/semere-talegngeta/',
    telegramLink: 'https://t.me/Semere627',
  },
];

const TeamMembers = () => {
  return (
    <>
      <section className="team-section position-relative" id="team">
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
                  twitterLink={teamMember.twitterLink}
                  githubLink={teamMember.githubLink}
                  linkedinLink={teamMember.linkedinLink}
                  telegramLink={teamMember.telegramLink}
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
