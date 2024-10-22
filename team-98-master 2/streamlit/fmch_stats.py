from turtle import width
import pandas as pd
import calmap 
import matplotlib.pyplot as plt
import streamlit as st
import numpy as np
from PIL import Image
import plotly.express as px
import seaborn as sns

header = st.container()
session_stats = st.container()
time_spent = st.container()
time_received = st.container()
at_risk = st.container()
put_map = st.container()
at_risk_pregnancies = st.container()
interactions = st.container()


with time_spent:

    st.header("Anganwadi Details")

    df = pd.read_csv('ben.csv',index_col=0)

    df['session_date'] = pd.to_datetime(df['session_date'])

    df['year'] = df.session_date.dt.year
    df['month'] = df.session_date.dt.month

    year_options = df['year'].unique().tolist()
    year = st.selectbox('Year?',year_options,0)

    aww_id_options = df['aww_id'].unique().tolist()
    aww_id = st.selectbox("Anganwadi ID?",aww_id_options,0)

    df_temp = df[df['year']==year]
    df_temp = df_temp[df_temp['aww_id'] == aww_id]

    fig = px.scatter(df_temp.sample(n=10), x = "session_date" , y = "pregnancy_days" , size="session_time")

    fig.update_layout(width=800)

    st.write(fig)

with time_received:

    st.header("Beneficiary Care Received")

    df = pd.read_csv('ben.csv',index_col=0)

    df['session_date'] = pd.to_datetime(df['session_date'])

    df['year'] = df.session_date.dt.year
    df['month'] = df.session_date.dt.month


    ben_id_options = df['ben_id'].unique().tolist()
    ben_id = st.selectbox("Beneficiary ID?",ben_id_options,1)

    df_temp = df_temp[df_temp['ben_id'] == ben_id]
    year_options = df_temp['year'].unique().tolist()
    year = st.selectbox('Year?',year_options,0)

    ben_names = df_temp['ben_name'].unique()

    st.subheader("Beneficiary: " + ben_names[0])

    df_temp = df[df['year']==year]

    fig = px.scatter(df_temp.sample(n=10), x = "session_date" , y = "pregnancy_days" , size="session_time")

    fig.update_layout(width=800)

    st.write(fig)

with at_risk:

    st.subheader("At Risk Pregnancies")

    risk_options = [1,2,3]
    risk_level = st.selectbox("RiskLevel?",risk_options,1)

    df = pd.read_csv('ben.csv',index_col=0)
    df['session_date'] = pd.to_datetime(df['session_date'])
    df['year'] = df.session_date.dt.year
    df['month'] = df.session_date.dt.month

    if risk_level == 1:
        st.subheader("Low Risk")
    elif risk_level == 2:
        st.subheader("Medium Risk")
    else:
        st.subheader("High Risk")

    df_temp = df[df['risklevel'] == risk_level]
    df_temp = df_temp[['ben_name','aww_name']].drop_duplicates()

    st.write(df_temp)

with put_map:

    st.subheader("Area Handled By the Angwanwadi Worker")
    df = pd.DataFrame(np.random.randn(1000, 2) / [50, 50] + [28.6139, 77.2090],columns=['lat', 'lon'])
    st.map(df)

with at_risk_pregnancies:
    
    st.subheader("Number of At Risk Pregnancies")

    df = pd.read_csv('ben.csv',index_col=0)
    df['session_date'] = pd.to_datetime(df['session_date'])
    df['year'] = df.session_date.dt.year
    df['month'] = df.session_date.dt.month

    df['session_date'] = df['session_date'].dt.strftime('%Y-%m')

    df_temp = df.groupby(['session_date'])['risklevel'].value_counts().unstack().fillna(0).astype(int).reindex()
    df_temp.columns = ['low_risk','mid_risk','high_risk']
    fig = plt.figure(figsize=(20,5))
    sns.lineplot(data=df_temp)
    st.pyplot(fig)

with interactions:
    st.subheader("Problems Addressed versus Solutions Advised")

    df = pd.read_csv('ben.csv',index_col=0)
    df['session_date'] = pd.to_datetime(df['session_date'])
    df['year'] = df.session_date.dt.year
    df['month'] = df.session_date.dt.month

    aww_id_options2 = df['aww_id'].unique().tolist()
    aww_id2 = st.selectbox("What is Anganwadi ID?",aww_id_options2,0)

    df_temp = df[df['aww_id'] == aww_id2]
    fig = plt.figure(figsize=(10,4))
    sns.barplot(data=df_temp[['problems_addressed','solutions_provided']])
    st.pyplot(fig)

