import CardText from '../cardText';
import ProfileCard from '../profileCard';

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
            <ProfileCard
              imgPath={'assets/images/team/fireayehu.jpeg'}
              title={'Fireayehu Zekarias'}
              profession={'CEO'}
            ></ProfileCard>

            <ProfileCard
              imgPath={'assets/images/team/rediet.png'}
              title={'Rediet Mengiste'}
              profession={'CDO'}
            ></ProfileCard>

            <ProfileCard
              imgPath={'assets/images/team/abenezer.jpeg'}
              title={'Abenezer Atnafu'}
              profession={'CFO'}
            ></ProfileCard>

            <ProfileCard
              imgPath={'assets/images/team/betsi.jpeg'}
              title={'Betselot Getnet'}
              profession={'CMO'}
            ></ProfileCard>

            <div className="justify-content-center d-flex">
              <ProfileCard
                imgPath={'assets/images/team/michael.jpg'}
                title={'Michael Solomon'}
                profession={'CTO'}
              ></ProfileCard>

              <ProfileCard
                imgPath={'assets/images/team/semere.jpeg'}
                title={'Semere Talegngeta'}
                profession={'COO'}
              ></ProfileCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMembers;
