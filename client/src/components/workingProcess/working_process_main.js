import CardText from '../cardText';
import WorkingProcess from '.';

const WorkingProcessMain = () => {
  return (
    <>
      <section className="working-process-section">
        <div className="container">
          <div className="row">
            <CardText
              textClass={'title text-white'}
              circleImgPath={'assets/images/icon/pencile.png'}
              content={'Working process'}
            ></CardText>
          </div>
        </div>
        <WorkingProcess></WorkingProcess>
      </section>
    </>
  );
};

export default WorkingProcessMain;
