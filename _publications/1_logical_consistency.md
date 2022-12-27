---
title: "Logical Consistency and Greater Descriptive Power for Facial Hair Attribute Learning (In-Review) " 
collection: publications
permalink: /publication/1_logical_consistency.md
excerpt: 'Haiyu Wu, Grace Bezold, **Aman Bhatta**, and Kevin W. Bowyer. <br><br>
This paper proposes a logically consistent prediction loss to aid learning of logical consistency across attributes'
---

[Download paper here!](https://github.com/abhatta1234/abhatta1234.github.io/blob/a3af8327463bdbff26968f00814b537e67eaec9a/files/papers/logical.pdf)

# Abstract

Face attribute research has so far used only simple binary attributes for facial hair; e.g., beard / no beard. We have created a new facial hair attribute dataset, FH37K, with more descriptive facial hair annotations. Face attribute research also so far has not dealt with logical consistency and completeness. For example, in prior research an image might be classified as both having no beard and also having a goatee (a type of beard). We show that the test accuracy of binary cross-entropy facial hair attribute classification drops significantly if logical consistency of classifications is enforced. We propose a logically consistent prediction loss, LCPLoss, to aid learning of logical consistency across attributes, and also a label compensation training strategy to eliminate the problem of no positive prediction across a set of related attributes. Using an attribute classifier trained on FH37K, we investigate how facial hair affects face recognition accuracy, including variation across demographics, using “in-the-wild” and “controlled” datasets. Results show that similarity and difference in facial hairstyle have important effects on the impostor and genuine score distributions in face recognition. Our trained facial hair attribute model and the new FH37K dataset will be made available after acceptance
