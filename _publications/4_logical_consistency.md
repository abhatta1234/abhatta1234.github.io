---
title: "Logical Consistency Paper"
collection: publications
permalink: /publication/4_logical_consistency.md
excerpt: 'This paper proposes logically consistent prediction loss to aid learning of logical consistency across attributes'
venue: '(In-Review)'
authors: 'Haiyu Wu, Grace Bezold, **Aman Bhatta**, and Kevin W Bowyer. 'Logical Consistency and Greater Descriptive Power for Facial Hair Attribute
Learning'
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
