---
date: "2026-07-08"
title: "NOMAI: following the signal to superluminous supernovae"
cardimage: nomai_.png
---

Superluminous supernovae (SLSNe) are among the most luminous transients known, yet they remain poorly understood because of their rarity and intrinsic heterogeneity.  
<!--more-->

Efficiently identifying them within the millions of nightly alerts produced by modern time-domain surveys is therefore essential for increasing the number of confirmed events.  

To address this challenge, we developed [NOMAI](https://arxiv.org/abs/2604.14761), a real-time machine-learning classifier dedicated to the identification of SLSN candidates within the ZTF alert stream. Without requiring a spectroscopic redshift, the classifier extracts physically motivated features from the light curves using the [Rainbow](https://fink-broker.org/news/2025-06-10-rainbow/) and [SALT2](https://www.aanda.org/component/article?access=bibcode&bibcode=&bibcode=2007A%2526A...466...11GFUL) models before classifying each incoming alert with an [XGBoost algorithm](https://medium.com/low-code-for-advanced-data-science/xgboost-explained-a-beginners-guide-095464ad418f).  

Trained on a curated set of labeled ZTF transients, including more than 200 SLSNe, NOMAI reaches 66% completeness and 58% purity on the benchmark dataset. The classifier was designed to place particular emphasis on completeness, ensuring that the majority of SLSNe are recovered while maintaining a practical level of contamination for spectroscopic follow-up.  

NOMAI is easily usable through the Fink ZTF science portal via the “SLSN candidate” class. During its first two months of operation, it recovered **22 of the 24** SLSNe publicly reported on the [Transient Name Server](https://www.wis-tns.org/), demonstrating its ability to efficiently identify promising candidates in real-time.  


<img src="images/slsn.png" align="center" width="70%" height="700%" style="display: block; margin: auto;" />

The next objective for NOMAI is its adaptation to the Vera C. Rubin Observatory Legacy Survey of Space and Time (LSST), where automated photometric classification will become indispensable. This adaptation is currently underway and will be the subject of future work.  

The complete analysis is presented in [Russeil *et al.*, 2026](https://arxiv.org/abs/2604.14761).
