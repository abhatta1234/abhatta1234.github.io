---
title: "CAST: Conditional Attribute Subsampling Toolkit for Fine-grained Evaluation"
collection: publications
permalink: /publication/2_cast
excerpt: 'Wes Robbins , Steven Zhou, **Aman Bhatta**, Chad Mello, Vitor Albiero,  Kevin W. Bowyer, and Terrence E. Boult <br><br>This paper proposes a new toolkit that efficiently filters data given an arbitrary number of conditions for metadata attributes. The purpose of the toolkit is to allow researchers to easily to evaluate models on targeted test distributions.'
venue: 'Winter Conference on Applications of Computer Vision Workshops(WACV)'
date: 2023-01-03
---
[Download paper here!](/files/papers/CAST.pdf)

# Abstract

Thorough evaluation is critical for developing models that are fair and robust. In this work, we describe the Conditional Attribute Subsampling Toolkit (CAST) for selecting data sub-sets for fine-grained scientific evaluations. Our toolkit efficiently filters data given an arbitrary number of conditions for metadata attributes. The purpose of the toolkit is to allow researchers to easily to evaluate models on targeted test distributions. The functionality of CAST is demonstrated on the WebFace42M face Recognition dataset. We calculate over 50 attributes for this dataset including race, image quality, facial features, and accessories. Using our toolkit, we create over a hundred test sets conditioned on one or multiple attributes. Results are presented for subsets of various demographics and image quality ranges. Using eleven different subsets, we build a face recognition 1:1 verification benchmark called C11 that exclusively contains pairs that are near the decision threshold. Evaluation on C11 with state-of-the-art methods demonstrates the suitability of the
proposed benchmark.
