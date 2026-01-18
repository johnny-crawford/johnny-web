---
title: "Predicting SPY Returns with a Hybrid LR + LSTM Model"
github_url: "https://github.com/johnny-crawford/Price-Prediction-Model"
tags: lab
lessons:
  - "it’s a hybrid model that tries to predict next day returns for the SPY ETF using linear regression plus an LSTM to capture patterns the linear model misses."
  - "they start with a baseline linear regression on engineered features like momentum and volatility."
  - "Then they train an LSTM on the regression residuals to see if it can add predictive power."
  - "the hybrid didn’t beat the baseline in directional accuracy, but it’s a good hands on exercise with time series ML."
---