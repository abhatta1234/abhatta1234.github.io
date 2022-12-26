---
title: "The Gender Gap in Face Recognition is a Hairy Problem"
collection: publications
permalink: /publication/1_gender_gap
excerpt: 'This paper analyzes that the gender gap in face recognition accuracy is mostly due varying dimensions of hairstyles that exists for men and is absent for female'
venue: 'Winter Conference on Applications of Computer Vision Workshops'
authors: '**Aman Bhatta**, Vıtor Albiero, Kevin W Bowyer, and Michael C King. “The Gender Gap in Face Recognition Accuracy Is a Hairy Problem”. In: Winter Conference on Applications of Computer Vision(WACV) Workshops. 2022.'
citation: 'Bhatta, Aman, et al. "The Gender Gap in Face Recognition Accuracy Is a Hairy Problem." arXiv preprint arXiv:2206.04867 (2022).'
---

[Download paper here]()

# Abstract

Face attribute research has so far used only simple bi-
nary attributes for facial hair; e.g., beard / no beard. We
have created a new facial hair attribute dataset, FH37K,
with more descriptive facial hair annotations. Face at-
tribute research also so far has not dealt with logical con-
sistency and completeness. For example, in prior research
an image might be classified as both having no beard and
also having a goatee (a type of beard). We show that the test
accuracy of binary cross-entropy facial hair attribute clas-
sification drops significantly if logical consistency of clas-
sifications is enforced. We propose a logically consistent
prediction loss, LCPLoss, to aid learning of logical con-
sistency across attributes, and also a label compensation
training strategy to eliminate the problem of no positive
prediction across a set of related attributes. Using an at-
tribute classifier trained on FH37K, we investigate how fa-
cial hair affects face recognition accuracy, including vari-
ation across demographics, using “in-the-wild” and “con-
trolled” datasets. Results show that similarity and differ-
ence in facial hairstyle have important effects on the im-
postor and genuine score distributions in face recognition.
Our trained facial hair attribute model and the new FH37K
dataset will be made available after acceptance
