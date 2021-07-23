import CardText from '../cardText';
import OfferCard from '.';

const OfferMain = () => {
  return (
    <>
      <section className="service-section section-pb-150 pt-10">
        <div className="container">
          <div className="row">
            <CardText
              textClass={'title text-dark'}
              circleImgPath={'assets/images/icon/sharing.png'}
              content={'What we offer'}
            ></CardText>
          </div>
          <div className="row mb-n7">
            <OfferCard
              title={'Web design and development'}
              content={
                ' Web design determines the look and feel of a website, while web development determines how it functions.'
              }
              lineImgPath={'assets/images/service/line-one.png'}
              circleImgPath={'assets/images/icon/marketing.png'}
              buttonOutlineClass={'btn btn-outline-danger'}
            ></OfferCard>
            <OfferCard
              title={'Social Media Management'}
              content={
                ' We will help you channel your energies where it counts for your business.'
              }
              lineImgPath={'assets/images/service/line-two.png'}
              circleImgPath={'assets/images/icon/analytics.png'}
              buttonOutlineClass={'btn btn-outline-warning'}
            ></OfferCard>
            <OfferCard
              title={'Mobile App Development'}
              content={
                'We design and develop custom mobile applications for iOS and Android platforms.'
              }
              lineImgPath={'assets/images/service/line-three.png'}
              circleImgPath={'assets/images/icon/connect.png'}
              buttonOutlineClass={'btn btn-outline-primary'}
            ></OfferCard>
            <OfferCard
              title={'Search Engine Optimization - SEO'}
              content={
                'Get visibility with potential customers as your products and services are searched on Google.'
              }
              lineImgPath={'assets/images/service/line-foure.png'}
              circleImgPath={'assets/images/icon/document.png'}
              buttonOutlineClass={'btn btn-outline-secondary'}
            ></OfferCard>
          </div>
        </div>
      </section>
    </>
  );
};
export default OfferMain;
