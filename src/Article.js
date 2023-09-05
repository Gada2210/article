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
            <p>AF is the most common arrhythmia known in medicine. Natriuretic peptides are an important prognostic markers in patients with AF .The association with B type natriuretic peptide, disease progression and outcomes in patients with atrial fibrillation has not been thoroughly investigated.</p>
            <h3>Objective</h3>
            <p>AF has increased incidence of mortality and morbidity in cardio vascular field this makes the ultimate goal of treatment, to increase the quality of life in patients and decrease the adverse outcomes eg. Stroke, heart failure, reaccurance.
            This systemic review is based on (NPS) natriuretic peptides, to rule out adverse outcomes in patients with AF.</p>
            <h3>Method</h3>
            <p>We conducted a systematic literature search on PubMed using two separate search queries:</p>
            <ul>
                <li>beta natriuretic peptide OR (BNP) AND (acute heart failure OR acute decompensated heart failure OR chronic heart failure OR congestive heart failure) AND clinical trial</li>
                <li>beta natriuretic peptide OR (BNP) AND (systemic embolism OR arterial embolism OR recurrence OR "atrial fibrillation" OR "AF" OR "catheter ablation") AND clinical trial</li>
                <li>After removing duplicates and applying our inclusion and exclusion criteria, we identified seven relevant clinical trials from a total of 554 retrieved articles. These trials examined various cardiovascular conditions and assessed the predictive value of BNP for adverse outcomes. Exclusion criteria included absence of BNP cut-off values, non-clinical trial studies, studies published before 2011, and non-English language publications.</li>
            </ul>
            <h3>Result</h3>
            <ul>
                <li>AFib and risk of Heart failure: Three studies examined B-type natriuretic peptide (BNP) and N-terminal pro-B-type natriuretic peptide (NT-proBNP) in atrial fibrillation (AF) and heart failure (HF).</li>
                <li>Key findings: NT-proBNP is higher in AF with HF (744 pg/mL vs. 211 pg/mL without). Specific cut-offs for HF diagnosis: 200 pg/mL with AF, 100 pg/mL without AF. NT-proBNP also predicts cardiovascular events regardless of AF. In heart failure with reduced ejection fraction (HFrEF), NT-proBNP>400 pg/mL predicts adverse outcomes in both AF and sinus rhythm. Complex AF-HF relationship underscores the need for biomarker validation.</li>
                <li>AFib and risk of Systemic embolism: In the first study of 261 patients with a median age of 74, higher baseline B-type natriuretic peptide (BNP) levels (above 200 pg/ml) were associated with 6 thromboembolic events, compared to 3 events in those with lower BNP levels. The study identified a significant correlation between elevated BNP levels and thromboembolic events, with a cutoff value of 218 pg/ml.</li>
                <li>In the second study with 1172 patients receiving anticoagulant therapy, elevated N- terminal pro-B-type natriuretic peptide (NT-proBNP) levels were significantly linked to an increased risk of stroke (HR 2.71) and higher mortality.</li>
                <li>Risk of AFib recurrence: BNP, with a cutoff of 237.45 pg/mL, is a strong predictor of AF recurrence (AUC 0.90). NT-pro-BNP alone doesn't reliably predict AF ablation success, but post-ablation elevations suggest long-term monitoring. Baseline NT-pro-BNP doesn't predict ablation outcome effectively. BNP is a more reliable predictor of AF recurrence compared to NT-pro-BNP in these contexts.</li>
            </ul>
            <h3>Conclusion</h3>
            <p>NP levels can greatly help in the clinical management and diagnosis of adverse outcomes In patients with AF. NPs has been established as a tool of diagnosis and prognostication, a guide to the management and monitoring of therapy, and a surrogate of the underlying disease with cut-off levels have been confirmed.
            BNP values improve the risk pridiction and adverse outcomes in patients with Afib with relatively acceptable accuracy.
            Further studies are required to assess whether biomarker based risk stratification improves patient outcomes.</p>
            <h3>KEYWORDS</h3>
            <p>Natriuretic peptides, Atrial fibrillation, Heart failiure, Hazard ratio, Diagnostic accuracy, Negative predictors.</p>
            <h3>ABBREVIATION</h3>
            <p>NP- Natriuretic peptides, AF- Atrial fibrillation, HF- Heart failiure, CI- confidence interval</p>
            </div>
        </div>
    );
}

export default Article;
