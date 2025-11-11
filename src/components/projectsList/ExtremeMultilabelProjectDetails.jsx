import '../../css/button33.css'
import smartbank from '../../images/smartbankimage.png'
import React from "react";



export default function ExtremeMultilabelProjectDetails() {
    return (
        <>


            <section>
                <div className="innerPageBannerCol" style={{paddingTop: '40px', paddingBottom: '5px'}}>
                    <div className="container">
                        <div className="row g-4 g-md-3  align-items-center">
                            <div className="col-md-6">
                                <div className="bannerContent">
                                    <br/>
                                    <h1 className="xlTitle pb-md-3" style={{textAlign: 'left'}}>🎓 Extreme Multi-label Text Classification</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div style={{textAlign: 'justify'}}>
                        <time dateTime="2020-05-25 12:00:00">
                            <i className="fas fa-calendar-alt mr-2"></i> 1, March, 2023
                            &nbsp; <a href={"https://github.com/MehediHasanRaj/A-Title-based-Extreme-Multi-label-Multi-class-Text-Classification"}>🔗 Git Link</a>
                        </time>

                    </div>

                </div>

            </section>
            <br/>


{/* Abstract */}
<section>
  <div className="innerPageBannerCol" style={{ paddingTop: '0px', paddingBottom: '10px' }}>
    <div className="container">
      <div className="row g-4 g-md-3 align-items-center">
        <div className="col-md-6">
          <div className="bannerContent">
            <h4 style={{ textAlign: 'justify' }}>📝 Abstract</h4>
          </div>
        </div>
        <hr />
      </div>
      <p style={{ textAlign: 'justify' }}>
        Semantic annotation, or tagging, is the process of assigning the most relevant labels to
        documents or articles. Platforms like <strong>Wikipedia</strong> or online library systems use it,
        with both <strong>titles</strong> and <strong>full text</strong> available. Traditionally, title-only annotation performs worse than full-text annotation.
      </p>
      <div style={{ backgroundColor: '#d0ebff', borderLeft: '4px solid #1c7ed6', padding: '10px', borderRadius: '4px', marginBottom: '10px' }}>
        <p style={{ color: '#1c7ed6', margin: 0 }}>
          <strong>Key Insight:</strong> Title-based annotation can be <strong>competitive or even better</strong> when using deep learning models.
        </p>
      </div>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'justify' }}>
        <li><strong>CNN:</strong> F1 = 0.492 ✅</li>
        <li><strong>GRU:</strong> F1 = 0.488</li>
        <li><strong>LSTM:</strong> F1 = 0.482</li>
        <li><strong>MLP:</strong> F1 = 0.475</li>
      </ul>
    </div>
  </div>
</section>

{/* Dataset */}
<section>
  <div className="innerPageBannerCol" style={{ paddingTop: '0px', paddingBottom: '10px' }}>
    <div className="container">
      <div className="row g-4 g-md-3 align-items-center">
        <div className="col-md-6">
          <div className="bannerContent">
            <h4 style={{ textAlign: 'justify' }}>📂 Dataset</h4>
          </div>
        </div>
        <hr />
      </div>
      <p style={{ textAlign: 'justify' }}>
        We used the <strong>EconBiz dataset</strong> (other available dataset: PubMed).
      </p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'justify' }}>
        <li>Created by <strong>ZBW–Leibniz Information Center for Economics</strong> in 2017</li>
        <li>Over <strong>1,065,000 publications</strong></li>
        <li>Tags in English with <strong>STW marks</strong>, duplicates removed</li>
        <li>Labels curated by experts using <strong>STW</strong> – <strong>6,000+ labels</strong></li>
      </ul>
      <div style={{ backgroundColor: '#d3f9d8', borderLeft: '4px solid #37b24d', padding: '10px', borderRadius: '4px', marginBottom: '10px' }}>
        <p style={{ color: '#2f9e44', margin: 0 }}>
          <strong>Why it matters:</strong> Large, expert-labeled datasets make this research meaningful for semantic annotation and multi-label classification.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Methodology */}
<section>
  <div className="innerPageBannerCol" style={{ paddingTop: '0px', paddingBottom: '10px' }}>
    <div className="container">
      <div className="row g-4 g-md-3 align-items-center">
        <div className="col-md-6">
          <div className="bannerContent">
            <h4 style={{ textAlign: 'justify' }}>⚙️ Methodology</h4>
          </div>
        </div>
        <hr />
      </div>
      <p style={{ textAlign: 'justify' }}>
        We implemented <strong>MLP, CNN, LSTM, and GRU</strong> models. Previous MLP models used <strong>TF-IDF</strong>, which cannot capture semantic meaning well in large datasets. Our models use <strong>word embeddings</strong>, which capture semantic relationships and improve title-based classification.
      </p>
      <div style={{ backgroundColor: '#fff3bf', borderLeft: '4px solid #f59f00', padding: '10px', borderRadius: '4px', marginBottom: '10px' }}>
        <p style={{ color: '#f08c00', margin: 0 }}>
          <strong>Takeaway:</strong> Our models provide a strong foundation for future improvements in extreme multi-label classification.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Results */}
<section>
  <div className="innerPageBannerCol" style={{ paddingTop: '0px', paddingBottom: '10px' }}>
    <div className="container">
      <div className="row g-4 g-md-3 align-items-center">
        <div className="col-md-6">
          <div className="bannerContent">
            <h4 style={{ textAlign: 'justify' }}>📊 Results & Discussion</h4>
          </div>
        </div>
        <hr />
      </div>
      <p style={{ textAlign: 'justify' }}>
        Optimal epochs for low loss: <strong>CNN:</strong> 2–5 | <strong>MLP:</strong> 3–5 | <strong>GRU:</strong> 6–9 | <strong>LSTM:</strong> 7–10. Test loss ranges: 0.003–0.004.
      </p>
      <p style={{ textAlign: 'justify' }}>
        Tested thresholds: 0.20, 0.25, 0.30, 0.50. <strong>0.50</strong> underperforms, <strong>0.25</strong> gives best results.
      </p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'justify' }}>
        <li><strong>CNN:</strong> Best F1 at 5 epochs</li>
        <li><strong>MLP:</strong> Best 3–5 epochs</li>
        <li><strong>GRU:</strong> Best 7–10 epochs</li>
        <li><strong>LSTM:</strong> Best 7–11 epochs</li>
      </ul>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead style={{ backgroundColor: '#e9ecef' }}>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Model</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>F1 Score</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Rank</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '8px', fontWeight: 'bold' }}>CNN</td>
            <td style={{ border: '1px solid #ccc', padding: '8px', fontWeight: 'bold' }}>0.4981</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>1️⃣</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '8px', fontWeight: 'bold' }}>GRU</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>0.4842</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>2️⃣</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '8px', fontWeight: 'bold' }}>LSTM</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>≈0.484</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>3️⃣</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '8px', fontWeight: 'bold' }}>MLP</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>0.4755</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>4️⃣</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

{/* Conclusion */}
<section>
  <div className="innerPageBannerCol" style={{ paddingTop: '0px', paddingBottom: '10px' }}>
    <div className="container">
      <div className="row g-4 g-md-3 align-items-center">
        <div className="col-md-6">
          <div className="bannerContent">
            <h4 style={{ textAlign: 'justify' }}>🏁 Conclusion & Future Work</h4>
          </div>
        </div>
        <hr />
      </div>
      <p style={{ textAlign: 'justify' }}>
        Title-based annotation can outperform full-text annotation using deep learning and word embeddings. Extreme multi-label classification is challenging due to the large number of labels. Our contributions, especially the <strong>GRU model</strong>, provide a strong foundation for future research.
      </p>
      <div style={{ backgroundColor: '#f3e5f5', borderLeft: '4px solid #9c27b0', padding: '10px', borderRadius: '4px', marginBottom: '10px' }}>
        <p style={{ color: '#6f42c1', margin: 0 }}>
          <strong>Impact:</strong> This research bridges language understanding and AI-driven classification, paving the way for more intelligent and human-centered AI systems.
        </p>
      </div>
    </div>
  </div>
</section>



        </>
    )
}