import { Accordion, Card } from 'react-bootstrap';

const FAQObj = [
  {
    id: 1,
    title: 'What are the benefits of social media marketing for my company?',
    content:
      'Whether your business is taking advantage of it or not, social media has forever changed the way that consumers communicate with businesses, and vice versa. Being accessible to your customers – and your prospective clients – via social media is a vital means of developing relationships with them and helping them through the sales funnel.',
  },
  {
    id: 2,
    title: 'Can social media marketing really help my business?',
    content:
      ' Most definitely! It’s been proven again and again by business after business. In fact, not utilizing social media marketing can actually harm your business, since having an online presence on social media is simply expected of any reputable firm these days.',
  },
];

const FAQ = () => {
  return (
    <section className="faq-section">
      <img
        src="assets/images/faq/bg.png"
        alt="images-not_found"
        className="faq-bg"
      />
      <div className="container">
        <div className="row mb-n7">
          <div className="col-xl-6 mb-7">
            <div className="faq-image" data-aos="zoom-in" data-aos-delay="100">
              <img src="assets/images/faq/1.png" alt="images_not_found" />
            </div>
          </div>
          <div className="col-xl-6 mb-7">
            <div className="faq-content">
              <div className="section-title primary">
                <h5 className="sub-title">FAQ.</h5>
                <h3 className="title">Frequently Asked Question.</h3>
                <span className="hr-primary mt-4"></span>
              </div>
              <div className="accordion" id="accordionExample">
                <Accordion defaultActiveKey="0" className="text-dark text-justify">
                  {FAQObj.map((faq) => {
                    return (
                      <Card>
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey={faq.id}
                          className="accordion-toggle"
                        >
                          {faq.id}. {faq.title}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={faq.id}>
                          <Card.Body>{faq.content}</Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    );
                  })}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;
