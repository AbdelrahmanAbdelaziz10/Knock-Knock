import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import './MainServes.css'
import useFetch from "../../../hooks/useFetch";
import PaginationCom from "../../Common Component/Pagination/Pagination";
import ServesComponent from "../../Home Components/Serves/ServesComponent";
import { useTranslation } from "react-i18next";

const MainServes = ({ getPage,contentServes }) => {
  const {t,i18n}=useTranslation()
  const { data: serves, setData: setServes } = useFetch("/api/v1/services/get-all");
  const [servesSearch, setServesSearch] = useState({
    search: "",
  });
  console.log(contentServes)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(
          "https://dashboard.knock-knock.ae/api/v1/search/services",
          servesSearch
        );
        setServes(response.data);
        console.log(serves);
      } catch (error) {
        console.log("error", error);
      }
    }
    
    if (servesSearch.search.trim() !== "") {
      fetchData();
    } else {
      clearSearch();
    }
  }, [servesSearch]);

  const clearSearch = async () => {
    // Fetch all data when search content is empty
    const allDataResponse = await axios.get("https://dashboard.knock-knock.ae/api/v1/services/get-all");
    setServes(allDataResponse.data);
  };

  const handelSearchChange = (e) => {
    setServesSearch({
      ...servesSearch,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="main_serves py-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={11} lg={11} md={9} sm={11} className="">
            <input
              className="search_input"
              type="text"
              name="search"
              onChange={handelSearchChange}
              placeholder={t("search")}
            />
          </Col>
        </Row>
        <div className="row Servies allservice">
          {contentServes?.length > 0 ? (
            contentServes?.map((s, idx) => (
              <ServesComponent
                image={`https://dashboard.knock-knock.ae/${s.image}`}
                key={s.id}
                link={`/serves/${s.id}`}
                name_ar={s.name_ar}
                name_en={s.name_en}
              />
            ))
          ) : servesSearch.search.trim() !== "" ? (
            <h2 className="text-center p-4">{t("no_result")}</h2>
          ) : (
            <h2 className="text-center p-4">{t("no_serves")}</h2>
          )}

          <Row>
            <Col>       
             <PaginationCom total={serves?.data?.per_page} getPage={getPage} url={"https://dashboard.knock-knock.ae/api/v1/services/get-all?page="}/>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default MainServes;
