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
  {
    id: 3,
    title: 'Do Small, Local Businesses Need Digital Marketing?',
    content:
      'Yes! No matter how large or small, if you have a business, you need a website. And if you need a website – and you want it to help you make money – you need marketing.',
  },
  {
    id: 4,
    title: 'Does Google Ads Really Mean Immediate Traffic?',
    content:
      'Yes – you can get traffic overnight with Google Ads (formerly known as Google AdWords), a paid traffic solution that shows ads to people when they search keywords relevant to your website.',
  },
  {
    id: 5,
    title: 'What are the benefits of social media marketing for my company?',
    content:
      'Whether your business is taking advantage of it or not, social media has forever changed the way that consumers communicate with businesses, and vice versa. Being accessible to your customers – and your prospective clients – via social media is a vital means of developing relationships with them and helping them through the sales funnel.',
  },
  {
    id: 6,
    title: 'When Will I See Results?',
    content:
      'There is no magical number you can set for seeing results from inbound marketing. As a general rule of thumb, in our experience, companies start hitting their goals in as little as 90 days.',
  },
  {
    id: 7,
    title: 'Which Elements Should I Prioritize?',
    content:
      "The first aspect to focus on is, you guessed it, your audience. You need to know who you're tailoring messaging for and how to position your brand in a way that catches and holds their attention.",
  },
  {
    id: 8,
    title: 'How much is it going to cost?',
    content:
      'Marketers who have limited experience with content marketing often worry that the cost of creating content is just too expensive for their company. The reality is that marketers often expect to pay way more than creators charge for various content assets.',
  },
  {
    id: 9,
    title: 'What Is a Blog?',
    content:
      'A blog is the part of your website that’s constantly updated. Every time you post a piece of writing – which you might hear called a post or article – it shows up on your blog. It’s a great way to keep leads and customers up to date on the latest news.',
  },
];

const FAQ = () => {
  return (
    <section className="faq-section" id="FAQ">
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
                <h5 className="sub-title">FAQ</h5>
                <h3 className="title">Frequently Asked Question.</h3>
              </div>
              <div className="accordion" id="accordionExample">
                <Accordion
                  defaultActiveKey="0"
                  className="text-dark text-justify"
                >
                  {FAQObj.map((faq) => {
                    return (
                      <Card>
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey={faq.id}
                          className="accordion-toggle pt-2"
                        >
                          <h6>
                            {' '}
                            {faq.id}. {faq.title}
                          </h6>
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
