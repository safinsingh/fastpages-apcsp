---
toc: true
layout: post
categories: [markdown, csp, ap]
comments: true
title: Final Test
---

I got a 49/50 on my final:

![]({{ site.baseurl }}/images/finalscore.png)

I got this question wrong:

![]({{ site.baseurl }}/images/finalwrong.png)

In order to interchange the values at index `j` and `k` respectively, the procedure works as follows:

1. Create a duplicate list of the list provided in the function parameters
2. Set the element at index `i` of the new list to the element at index `j` in the old list and vice versa
3. Return the new list

Therefore, answers `C` and `D` are incorrect. We're left with deciding betweenrange(s) for `j` and `k` in answer choices `A` and `B`:

> The value of j must be between 0 and the value of k, inclusive _OR_ The values of j and k must both be between 1 and LENGTH(numList), inclusive.

It is known that `j` and `k` must be valid list indices of the list provided in the parameter. It is assumed that the list accesses are accessing by position rather than index because `LEN(numList)` is an invalid index. Therefore, `B` is possibly correct. There is no explicit boundary set for `j` such that it must be less than `k`. `j` and `k` should be interchangable because they are being used to swap two elements in a list (`swap(a, b)` should be equivalent to `swap(b, a)`).

Therefore, the correct answer must be answer choice `B`.
