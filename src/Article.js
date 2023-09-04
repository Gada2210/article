import React, { useEffect } from 'react';
import './Article.css';
import logo from './logo.jpeg';

const Article = () => {

    // Set the document title using useEffect
    useEffect(() => {
        document.title = "The role of Natriuretic Peptide in predicting adverse outcomes amongst patients with Atrial Fibrillation: A Systematic Review";
    }, []);

    return (
        <div className="article-container">
            <div className="header">
                <img src={logo} alt="Logo" className="logo"/>
                <h1 className="journal-title">Research Article Journal</h1>
                <div className="college-box">SSR Medical College</div>
            </div>
            <h1>The role of Natriuretic Peptide in predicting adverse outcomes amongst patients with Atrial Fibrillation: A Systematic Review</h1>
            <p><strong>Authors:</strong> Anand Agarwal. Shauvik Walia. Shreyansh Shailaal. Mustansir Kapasi. MBBS Students of S.S.R. Medical College Mauritius</p>
            <div className="abstract-section">
            <h2>ABSTRACT</h2>
            <h3>Introduction</h3>
            <p>AF is the most common arrhythmia known in medicine. Natriuretic peptides are important prognostic markers in patients with AF. The association with B type natriuretic peptide, disease progression, and outcomes in patients with atrial fibrillation has not been thoroughly investigated.</p>
            <h3>Objective</h3>
            <p>AF has an increased incidence of mortality and morbidity in the cardiovascular field. This makes the ultimate goal of treatment to increase the quality of life in patients and decrease adverse outcomes e.g., Stroke, heart failure, recurrence. This systematic review is based on (NPS) natriuretic peptides, to rule out adverse outcomes in patients with AF.</p>
            <h3>Method</h3>
            <p>Analysis of the association between natriuretic peptide and adverse outcomes, taken from Pubmed, Embase, Google Scholar, Medline until 31st August 2023.</p>
            <h3>Result</h3>
            <ul>
                <li>Among 1586 patients with AF (25-74 years; 57% men), Median BNP=100pg/ml becomes the cutoff value with diagnostic accuracy 83.4% and the negative predictor being &lt;50pg/ml was 96% for acute HF.</li>
                <li>Among 1410 PATIENTS with afib (57.2+_11.6 years; 68% men), Median BNP=237.45pg/ml becomes the cutoff value with a follow-up in 20.7+_8 months for recurrence of afib after ablation.</li>
                <li>Among 250 PATIENTS with afib, Median BNP=80pg/ml becomes the cutoff value with diagnostic accuracy 95% and the negative predictor being &lt;80pg/ml was 98% for chronic HF.</li>
                <li>In trials involving 261 patients, 153 having paroxysmal AF treated with Warfarin were included for the analysis. Those with cutoff BNP levels _&gt;200 pg/ml in 73 patients and &lt;200 pg/ml had a hazard ratio of 5.32 (95% CI: 1.67 - 1.53, p=0.018) for stroke/embolism.</li>
            </ul>
            <h3>Conclusion</h3>
            <p>NP levels can greatly help in the clinical management and diagnosis of adverse outcomes in patients with AF. NPs have been established as a tool of diagnosis and prognostication, a guide to the management and monitoring of therapy, and a surrogate of the underlying disease. Cutoff levels have been confirmed. BNP values improve the risk prediction and adverse outcomes in patients with Afib with relatively acceptable accuracy. Further studies are required to assess whether biomarker-based risk stratification improves patient outcomes.</p>
            <h3>KEYWORDS</h3>
            <p>Natriuretic peptides, Atrial fibrillation, Heart failure, Hazard ratio, Diagnostic accuracy, Negative predictors.</p>
            <h3>ABBREVIATION</h3>
            <p>NP- Natriuretic peptides, AF- Atrial fibrillation, HF- Heart failure</p>
            </div>
        </div>
    );
}

export default Article;
