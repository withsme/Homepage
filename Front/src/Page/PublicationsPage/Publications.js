import React, {useEffect} from 'react';
import { Collapse } from 'antd';
import styled from "styled-components";
import axios from 'axios';

const { Panel } = Collapse;

function Publications() {
    // useEffect(() => {
    //     axios.get('/publication')
    //         .then((res)=>console.log ("성공!!!!!!!" + res.data ) )
    //         .catch((Error)=>{console.log(Error)})
    // }, [] )
    
    return (
        <>
            <Title>
                Publications
            </Title>
            <Wrapper>
                <Collapse style={{ backgroundColor:"white"}} bordered={false} >
                    <Panel header="International Journal Papers" style={{ fontSize:"25px"}}>
                        <Content>                            
                            <p/>[17] Layout-MetaBERT for Metadata Extraction from Scientific Articles (arxiv)
                            <p/>[16] Deokin Seo, Heung-Seon Oh and Yuchul Jung (2021), Wav2KWS: Transfer Learning from Speech Representations for Keyword Spotting, IEEE Access, [SCIE, Q1]
                            <p/>[15] Yeonghun Lee and Yuchul Jung (2019), A Mapping Approach to Identify Player Types for Game Recommendations, Information 2019, 10(12), 379; https://doi.org/10.3390/info10120379  [SCOPUS]
                            <p/>[14] Heung-Seon Oh and Yuchul Jung (2018), Minimally Supervised Relation Identification from Wikipedia Articles, Journal of Information Science Theory and Practice (JISTaP), Vol. 6, Issue 4, pp.28-38, [SCOPUS]
                            <p/>[13] Ohbyung Kwon, Yun Seon Kim, Namyeon Lee, and Yuchul Jung. (2018) “When Collective Knowledge Meets Crowd Knowledge in a Smart City: A Prediction Method Combining Open Data Keyword Analysis and Case-Based Reasoning,” Journal of Healthcare Engineering, vol. 2018, Article ID 7391793, 15 pages, https://doi.org/10.1155/2018/7391793. [SCIE]
                            <p/>[12] Yuchul Jung, Cinyoung Hur, Muchel Kim (2018), Sustainable Situation-Aware Recommendation Services with Collective Intelligence, Sustainability, Vol. 10, Issue 5, 1632. [SCIE, Q2]
                            <p/>[11] Heung-Seon Oh and Yuchul Jung (2017), Enhancing the Narrow-down Approach to Large-scale Hierarchical Text Classification with Category Path Information, Journal of Information Science Theory and Practice (JISTaP), Vol. 5, Issue 3, pp. 31-47 [SCOPUS]
                            <p/>[10] Yuchul Jung (2016), A Semantic Annotation Framework for Scientific Publications, Quality & Quantity, May 2017, Vol. 51, Issue 3, pp. 1009-1025. [SSCI, Q2]
                            <p/>[9] Heung-Seon Oh and Yuchul Jung (2015), Cluster-based query expansion using external collections in medical information retrieval, Journal of Biomedical Informatics (JBI), Vol. 58, pp. 70-79 [SCI, Q1]
                            <p/>[8] Yuchul Jung, Cinyoung Hur, Dain Jung, and Minki Kim (2015), Identifying Key Hospital Service Quality Factors in Online Health Communities, Journal of Medical Internet Research (JMIR), doi:10.2196/jmir.3646  [SCIE, Q1]
                            <p/>[7] Heung-Seon Oh and Yuchul Jung (2014), External methods to address limitations of using global information on the narrow-down approach for hierarchical text classification, Journal of Information Science, DOI: 10.1177/0165551514544626 [SCIE, Q1]
                            <p/>[6] Minki Kim, Yuchul Jung, Dain Jung, and Cinyoung Hur (2014), Investigating the Congruence of Crowdsourced Information With Official Government Data: The Case of Pediatric Clinics, Journal of Medical Internet Research, doi:10.2196/jmir.3078 [SCIE, Q1]
                            <p/>[5] Yuchul Jung, Yoo-mi Park, et al. (2011), Employing Collective Intelligence for User Driven Service Creation, IEEE Communications Magazine, 49(1), pp. 76-83. [SCI, Q1]
                            <p/>[4] Yuchul Jung, Jihee Ryu, Kyung-min Kim, and Sung-Hyon Myaeng (2010), Automatic Construction of a Large-Scale Situation Ontology by Mining How-to Instructions from the Web, Journal of Web Semantics, 8(2), pp. 110-124. [SCIE, Q1]
                            <p/>[3] Sungpil Choi, Yuchul Jung, and Sung-Hyon Myaeng (2007), Optimization of Domain-Independent Classification Framework for Mood Classification, International Journal of Information Processing Systems, Korea Information Processing Society 3(2):73-81. [SCOPUS]
                            <p/>[2] Yun Jin, Sung-Hyon Myaeng, and Yuchul Jung (2007), Use of Place Information for Improved Event Tracking, Information Processing & Management 983, Volume 43, pp.365-378. [SSCI, Q1]
                            <p/>[1] Hyunseok Kim, Yuchul Jung, and Yong K. Hwang (2005), Taxonomy of Atomic Actions for Home-Service Robots, Journal of Advanced Computational Intelligence and Intelligence Informatics (JACIII) 9(2), pp.114-120.
                        </Content>
                    </Panel>
                    <Panel header="Domestic Journal Papers" style={{ fontSize:"25px" }}>
                        <Content>
                            <p/>[11] Jun-Nyeong Jeong, Sang-Young Kim, Seong-Tae Kim, Jeong-Jae Lee, and Yuchul Jung, "A Study on Korean Language Honorific Translation using Transformers", 한국정보기술학회 논문지, Vol. 19, No. 12, pp. 143-150, (Dec. 2021)
                            <p/>[10] 정준녕, 김상영, 김성태, 이정재, 정유철, "어텐션기반 측면추출에 기반한 제품기류의 측면요약", 정보과학회 논문지, Vol. 48, No. 12, pp. 1318-1328, (Dec. 2021)
                            <p/>[9] Hyuntae Kim, Junhyung Byun, Yoseph Na, and Yuchul Jung, "Implementation of Efficient Distributed Crawler through Stepwise Crawling Node Allocation", Journal of Advanced Information Technology and Convergence, Vol. 10, No. 2, pp. 15-31, (Dec. 2020)
                            <p/>[8] 손성빈, 이선훈, 정준욱, 손성빈, 오흥선, 정유철, "불확실성을 이용한 딥러닝 기반의 항공 이미지 객체 탐지 (Uncertainty-based Deep Object Detection from Aerial Images)", 제어로봇시스템학회 논문지, Vol . 26, No. 11, pp. 891-899 (Nov. 2020) [Scopus]
                            <p/>[7] Yeonsoo Lim, Deokjin Seo, and Yuchul Jung, "Fine-tuning BERT Models for Keyphrase Extraction in Scientific Articles", Journal of Advanced Information Technology and Convergence, Vol. 10, No. 10, pp. 45-56, (Jul. 2020)
                            <p/>[6] 손성빈, 정준욱, 오흥선, 정유철, "실시간 스트리밍을 위한 딥러닝 기반 얼굴마스킹 시스템 (DeepMask: Face Masking System using Deep Neural Networks on Real-time Streaming)", 제어로봇시스템학회 논문지, Vol . 26, No. 6, pp. 423-428 (Jun. 2020) [Scopus]
                            <p/>[5] 최종윤, 한혁, 정유철,  "국가 과학기술 표준분류체계 기반 연구보고서 문서의 자동 분류 연구" , 한국산학기술학회 논문지, Vol. 21, No. 01, pp.169-177 (30 Jan. 2020)
                            <p/>[4] 임연수, 서덕진, 정유철,  "한국어 음성 명령어 인식을 위한 자동 데이터 구축", 한국컴퓨터정보학회논문지, Vol. 24, No. 12, pp. 17-24 (30 Dec. 2019)
                            <p/>[3] 오흥선, 정유철,  "역인덱스 기반 상향식 군집화 기법을 이용한 대규모 학술 핵심어 분석", 한국산학기술학회논문지, Vol. 19, No. 11, pp. 758-764. (30 Nov. 2018)
                            <p/>[2] 정유철, 김진영, et al., "소비자 네트워킹 환경에서의 사용자 주도 서비스의 효율적 생성", Journal of Digital Contents Society, Vol. 17, No. 6, pp. 479-487. (30 Dec. 2016)
                            <p/>[1] 정유철, 서동준, et al., 오픈 데이터 플랫폼 동향, 정보처리학회(정보처리학회지) 23권 5호 (2016), pp. 53-63 (Sep. 2016)
                        </Content>
                    </Panel>
                    <Panel header="International Conference Papers" style={{ fontSize:"25px" }}>
                        <Content>                     
                            <p/>[15] Kyung-Min, Yuchul Jung, Sung-Hyon Myaeng, A Topic Transition Map for Query Expansion: A Semantic Analysis of Click-Through Data and Test Collections, Australasian Joint Conference on Artificial Intelligence, pp. 648-664, 2016 (2016.12.05)
                            <p/>[14] Heung-Seon Oh, Yuchul Jung, Kwang-Young Kim, A Multi-Stage Approach to Re-ranking Medical Documents, CLEF 2015, LNCS 9283, pp. 166-177, 2015.
                            <p/>[13] Yoo-Mi Park, Hyngkyung Yoo, Cinyoung Hur, Hyunjoo Bae, and Yuchul Jung, Semantic Service Discovery and Matching for Semi-automatic Service Mashup, 9th IEEE Int. Conf. on Semantic Computing (ICSC-15), 2015.
                            <p/>[12] Yuchul Jung, Yoonsung Cho, Yoo-mi Park, Taedong Lee, Automatic Tagging of Functional-goals for Goal-driven Semantic Service Discovery, 7th IEEE Int. Conf. on Semantic Computing (ICSC-13), 2013.
                            <p/>[11] Jihee Ryu, Yuchul Jung, and Sung-Hyon Myaeng, Actionable Clause Detection from Non-imperative Sentences in Howto Instructions: A Step for Actionable Information Extraction, 15th International Conference on Text, Speech, and Dialogue (TSD-12), LNCS 7499, pp. 272-281, 2012.
                            <p/>[10] Yoo-mi Park, HyunKyung Yoo, Yuchul Jung, Cinyoung Hur, Hyunjoo Bae, Semantic Web Service Process for Goal-driven Application Creation, 15th Int. Conf. Intelligence in Next Generation Networks: From Bits to Data, from Pipes to Clouds (ICIN 2011), Berlin, Germany, pp., 127-132, 2011.
                            <p/>[9] Yoo-mi Park, Yuchul Jung, HyunKyung Yoo, Hyunjoo Bae, Hwa-Sung Kim, EasyApp: Goal-driven Service Flow Generator with Semantic Web Service Technologies, ESWC 2011, Part II, LNCS 6644, pp. 446-450, 2011.
                            <p/>[8] Yuchul Jung, Jihee Yoo, and Sung-Hyon Myaeng, A Web-based Automated System for Industry and Occupation Coding, The Ninth International Conference on Web Information Systems Engineering (WISE-08), LNCS 5175, pp. 443-457, 2008.
                            <p/>[7] Hogun Park, Yoonjung Choi, Yuchul Jung, and Sung-Hyon Myaeng, Supporting Mixed Initiative Human-Robot Interaction: A Script Based Cognitive Architecture Approach, International Joint Conference on Neural Networks (IJCNN-08), pp. 4107-4113, 2008.
                            <p/>[6] Youngho Kim, Yuchul Jung, and Sung-Hyon Myaeng, An Automatic Opinion Analysis System Using Domain-Specific Lexical Knowledge, Asian Information Retrieval Symposium (AIRS-08), LNCS 4993, pp. 466-471, 2008.
                            <p/>[5] Yuchul Jung, Yoonjung Choi, and Sung-Hyon Myaeng, Determining Mood for a Web Blog by Combining Multiple Sources of Evidence, IEEE/WIC/ACM International Conference on Web Intelligence (WI-07), pp. 271-274, 2007.
                            <p/>[4] Yuchul Jung, Yoonjung Choi, Hogun Park, Wookhyun Shin, and Sung-Hyon Myaeng, Integrating Robot Task Scripts with a Cognitive Architecture for Cognitive Human-Robot Interaction, IEEE International Conference on Information Reuse and Integration (IRI-07), pp.152-157, 2007.
                            <p/>[3] Yuchul Jung, Hogun Park, Yoonjung Choi, and Sung-Hyon Myaeng, Designing a Cognitive Case-Based Reasoning Framework for Home Service Robots, 16th IEEE International Symposium on Robot & Human Interactive Communication (RO-MAN), pp.827-832, 2007.
                            <p/>[2] Yuchul Jung, Hogun Park, and Sung-Hyon Myaeng, A Hybrid Mood Classification Approach for Blog Text, PRICAI2006, LNAI4099, pp.1099-1103, 2006.
                            <p/>[1] Yuchul Jung, Yong K. Hwang, and Manjai Lee, Case-Based Reasoning Approach to Task Planning of Home-Service Robots, The 14th Int. Conf. on Artificial Reality and Telexistence, Seoul, Korea, Nov. 2004.
                        </Content>
                    </Panel>
                    <Panel header="International Workshop Papers" style={{ fontSize:"25px" }}>
                        <Content>
                            <p/>[11] Hyuntae Kim, Soyoung Park, Seongeun Yang, Yuchul Jung, CILAB@FinTOC-2021 Shared Task: Title Detection and Table of Content Extraction for Financial Document, Proc. of the 3rd Financial Narrative Processing Workshop, Sep. 2021.
                            <p/>[10] Yeonsoo Lim, Daehyeon Bong, Yuchul Jung, A Study on Automatic Keyphrase Extraction and Its Refinement for Scientific ARticles, DSKG workshop in ICWE'19, pp. 18-21, 2019
                            <p/>[9] Heong-Seon Oh, Yuchul Jung, KISTI at CLEF 2017 Patient-Centered Information Retrieval Task-1: Improving Medical Document Retrieval with Query Expansion , CLEF (Working Notes), 2017
                            <p/>[8] Heong-Seon Oh, Yuchul Jung, KISTI at CLEF eHealth 2016 Task3: Ranking Medical Documents using Word Vectors , CLEF (Working Notes), 2016, pp. 103-108
                            <p/>[7] Heong-Seon Oh, Yuchul Jung, Kwang-Young Kim, KISTI at CLEF eHealth 2015 Task2, CLEF (Working Notes), 2015
                            <p/>[6] Heung-Seon Oh, Yuchul Jung, KISTI at TREC 2014 Clinical Decision Support Track: Concept-based Document Re-ranking to Biomedical Information Retrieval, 2014.
                            <p/>[5] Heung-Seon Oh, Yuchul Jung, A Multi-stage Approach to Re-ranking Clinical Documents. CLEF (Working Notes), pp. 210-219, 2014.
                            <p/>[4] Yoonjung Choi, Yuchul Jung, and Sung-Hyon Myaeng, Identifying Controversial Issues and their Sub-topics in News Articles, Pacific Asia Workshop on Intelligence and Security in Conjunction with PAKDD’10 (PAISI’10), LNCS 6122, pp. 140-153, 2010.
                            <p/>[3] Jihee Ryu, Yuchul Jung, Kyung-min Kim, and Sung-Hyon Myaeng, Automatic Extraction of Human Activity Knowledge from Method-Describing Web Articles, Proc. of the 1st Workshop on Automated Knowledge Base Construction (AKBC’10), Grenoble, France, 2010.
                            <p/>[2] Yuchul Jung, Sungkooc Lim, Jeong-Hwan Kim, and Sangki Kim, Web Mining based OALF Model for Context-Aware Mobile Advertising System, The 4th IEEE/IFIP Int. Workshop on Broadband Convergence Networks (BcN-09), pp. 13-18, 2009.
                            <p/>[1] Youngho Kim, Yuchul Jung, and Sung-Hyon Myaeng, Identifying Opinion Holders in Opinion text from Online Newspapers, IEEE Granular Computing (Grc-07), pp. 699-702, 2007.
                        </Content>
                    </Panel>
                    <Panel header="Domestic Conference Papers" style={{ fontSize:"25px" }}>
                        <Content>
                            <p/>[11] 박성환,  정유철, 얼굴마스크 탐지 구현 (An Implementation of Face Mask Detection), 2021년 한국컴퓨터정보학회 동계학술대회  (2021.01)
                            <p/>[10] 김용우, 전성배,  정유철, 유튜브 메타정보를 이용한 자동 주제 분류 고찰 (An Analysis of Automatic Topic Classification using Youtube Meta Information), 2021년 한국컴퓨터정보학회 동계학술대회  (2021.01)
                            <p/>[9] 김나경, 조혜진, 이혜진,  정유철, 딥러닝을 이용한 배달 음식점 리뷰 자동 생성 (Automatic Review Generation for Delivery Restaurant using Deep Learning Models), 2021년 한국컴퓨터정보학회 동계학술대회  (2021.01)
                            <p/>[8] 정준녕, 김상영, 김성태, 이정재, 정유철, OpenNMT를 활용한 한글 존댓말 변환기의 구현 (Implementation of Korean Honorific Converter using OpenNMT), 2021년 한국컴퓨터정보학회 동계학술대회  (2021.01)
                            <p/>[7] 정지연, 천지은, 정유철, 선명화 기법을 이용한 TextFuseNet의 성능 향상 (Performance Improvement of TextFuseNet using Image Sharpening), 2021년 한국컴퓨터정보학회 동계학술대회  (2021.01)
                            <p/>[6] 유찬영, 서덕규, 정유철, Haar Cascade와 DNN기반 실시간 얼굴 표정 및 음성 감정 분석 및 구현(Implementation of Real Time Facial Expression and Speech Emotion Analyzer based on Haar Cascade and DNN), 2021년 한국컴퓨터정보학회 동계학술대회  (2021.01)
                            <p/>[5] 이나현, 신재영, 이수민, 정유철, 영양성분 인식을 위한 FOTS 기반 OCR구현  (FOTS based OCR Implementation for Nutritional Component Recognition), 2021년 한국컴퓨터정보학회 동계학술대회  (2021.01)
                            <p/>[4] 손동협, 정유철, CNN을 이용한 거북목 증후군 진단기의 구현  (Implementation of Turtle Neck Syndrome Diagnosis using CNN), 2021년 한국컴퓨터정보학회 동계학술대회  (2021.01)
                            <p/>[3] 이영훈, 이현승, 정유철, OCEAN 모델 기반 사용자 게임 성향분석을 위한 매핑 모델의 도출  (A New Mapping Model for Gamers' Type Analysis based on OCEAN), 2019년 한국컴퓨터종합학술대회 논문집. pp.1626-1628. (2019.06)
                            <p/>[2] 최종윤, 정유철, 과학기술 연구동향 파악을위한 연구방법론의 문장분류 (Sentence Classification for Scientific Research Trends Analysis), HCI KOREA 2019 (2019.02)
                            <p/>[1] 서덕진, 김영우, 정유철, 한글 초록 문장 태깅을 위한 BRAT의 확장 구현(An Extension of BRAT for Automatic Sentence Tagging in Korean Research Articles), HCI KOREA 2019 (2019.02)
                        </Content>
                    </Panel>
                    <Panel header="Registered Patents / Patent Application" style={{ fontSize:"25px" }}>
                        <Content>
                            <p/>[12] 정유철, 김현태, 김종운 "분산 웹 크롤링 방법, 분산 웹 크롤링 시스템, 이를 위한 컴퓨터 프로그램" (출원: 10-2020-0185944, 등록: 1022317620000) (등록, 2021.03.18)
                            <p/>[11] 김종운, 정유철, 최종윤 "정책정보 문서의 요지 정보 제공 방법, 정책정보 제공 시스템, 이를 위한 컴퓨터 프로그램" (출원: 10-2020-0037727, 등록: 1021583520000) (등록, 2020.09.15)
                            <p/>[10] 김종운, 정유철, 최종윤 "정책정보 제공 방법, 정책정보 제공 시스템, 이를 위한 컴퓨터 프로그램" (출원:10-2019-00070246, 등록: 1020554070000) (등록, 2019.12.06)
                            <p/>[9] 오흥선, 정유철 “키워드클러스터링 방법 및 장치” /  1018289950000 (2018.02.07)
                            <p/>[8] Yuchul Jung, Kim Jin Young, Jeong Seo Young, Dongjung Suh, Seok-Hyoung Lee, Hyejin Lee, KwangYoung Kim, Heung-Seon, Oh, “Apparatus for Recommending Document and Method for Recommending Document(문서추천장치 및 방법)” / Patent No. 10-1713831 (2017.03.02)
                            <p/>[7] Yuchul Jung, Heung-Seon Oh, Jaewon Park, and Seun-Heui Choi, “Systems and Methods for Producing XML(XML 생성 시스템 및 방법)”, 10-2014-0134458, Korea, Oct. 2014. / Patent No. 10-1500598 (2015.03.03)
                            <p/>[6] Yuchul Jung, Sangki Kim, Byungsun Lee, “Workflow configuration apparatus for composition WEB services and functionality information construction method for creating workflow of the composition WEB service (조합 웹서비스의 업무절차 생성장치 및 조합 웹서비스의 업무절차 생성을 위한 기능성 정보 구축 방법)”, 10-2009-0110459, Korea, Nov. 2009. / Patent No. 1301720 (2013.08.29)
                            <p/>[5] Sung-Hyon Myaeng, Kyungmin Kim, Yuchul Jung, Keunchan Park, Jinhyuk Choi, “Method and system for searching mobile application using human activity knowledge database”, 10-2011-0001391, Korea, Jan. 2011 / Patent No. 1220557 (2013.01.03)
                            <p/>[4] Sung-Hyon Myaeng, Heungseon Oh, Kyung-min Kim, Jihee Ryu, Yoonjung Choi, Hogun Park, Yuchul Jung, “System and method for advertising based on context”, 10-2009-0076742, Korea, Aug. 2009 / Patent No. 1110022 (2011. 12. 05)
                            <p/>[3] Sung-Hyon Myaeng, Yuchul Jung, Kyungmin Kim, “The Query/Document Topic Category Transition Analysis System and Method and the Query Expansion based Information Retrieval System and Method”, 10-2009-002579, Korea, March. 2009 / Patent No. 1078864 (2011.10.26)
                            <p/>[2] Sung-Hyon Myaeng, Hogun Park, Gwan Jang, Yuchul Jung, “Personalized Visualization Method for Supporting User’s Information Search”, 10-2008-0119613, Korea, Nov. 2008. / Patent No. 1054050 (2011.07.28)
                            <p/>[1] Sung-Hyon Myaeng, Keunchan Park, Yuchul Jung, Yoonjae Jeong, Sungchan Kim, “Method and System for Recommending Services to User of Mobile Terminal”, 10-2008-0119591, Korea, Nov. 2008. / Patent No. 1007059 (2011.01.03)
                            <p/>정유철, 봉대현, 서덕진 "주제 도메인에 기초한 음성 데이터 세트 구축 방법, 주제 도메인에 기초한 음성 데이터 세트 구축 시스템, 이를 위한 컴퓨터 프로그램" (10-2020-0131177) (출원, 2020.10.12)
                            <p/>정유철, 이상민, 권혁찬, 전석환, 권기훈 "무선 리모콘 장치 및 그를 이용하는 방법" (10-2020-0172740) (출원, 2020.12.10)                        
                        </Content>
                    </Panel>
                    <Panel header="Book" style={{ fontSize:"25px" }}>
                        <Content>
                            <p/>Sung-Hyon Myaeng, Yoonjae Jeong, and Yuchul Jung, Experiential Knowledge Mining, Foundations and Trends® in Web Science, Vol. 4, Issue 1, pp. 1-102. (15 Aug. 2013) 
                        </Content>
                    </Panel>
                </Collapse>
            </Wrapper>
        </>
    );
};


const Wrapper = styled.div`
  font-family: 'LatoRegular';
  padding: 4% 5% 3% 5%;
  font-size: 1rem;
`;

const Title = styled.div`
  height: 8rem;
  font-size: 3.8rem;
  font-weight: 600;
  text-align: center;
  padding: 1.8% 0% 10% 0%;
  bolder: 0px;
`;

const Content = styled.div`
  font-size: 1rem;
  font-weight: 200;
`;

export default Publications;
                          
