import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./creditswiper.css";
import { Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { ContextLang, LoginFormDataContext } from "../../../../App";
import axios from "axios";
import useFetch from "../../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function CreditSwiper() {
  const { t } = useTranslation();
  const { selectedLanguage } = useContext(ContextLang);
  const loginFormDatalocal = JSON.parse(localStorage.getItem("loginFormData"));
  const [responseMessage, setResponseMessage] = useState("");
  const { data: gitPacge } = useFetch("/api/v1/packages/get-all");
  const navigate = useNavigate();
  const { saveLoginFormData ,loginFormData} = useContext(LoginFormDataContext);

  const handleSubmit = async (packageId) => {
    console.log(packageId,"gygyg",loginFormDatalocal.id)

    Swal.fire({
      title: " Do you want to buy this package?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Buy it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.post(
            "https://dashboard.knock-knock.ae/api/v1/packages/buy",
            {
              user_id: loginFormDatalocal.id,
              package_id: packageId,
            }
          );
          saveLoginFormData({
            ...loginFormData,
            package_id: packageId,
          })
          console.log(loginFormData.package_id,"gygyg",loginFormDatalocal.id)
          setResponseMessage(response.data.message);
          console.log(response?.data?.payment_link)
                     // Open payment link in a new tab
          window.open(response?.data?.payment_link);
          // window.open(response?.data?.payment_link, "_blank"); 
          const res=await axios.post(
            "https://dashboard.knock-knock.ae/api/v1/packages/stripe-success"
          )
          console.log(res.data)
          if(res.status){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: res.message,
              showConfirmButton: false,
              timer: 1500
            });

          const afterPayRes =await axios.post(
            "https://dashboard.knock-knock.ae/api/v1/packages/add-balance-after-payment",
            {
              user_id: loginFormDatalocal.id,
              package_id: loginFormDatalocal.packageId,
            }
          )
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: afterPayRes.data.message,
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/credits")
        }
        } catch (error) {
          console.log("error", error);
        }
      }
    });
  };

  return (
    <>
      <Swiper
        slidesPerView={1.7}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {gitPacge?.data?.length > 0 ? (
          gitPacge?.data?.map((pacage) => {
            return (
              <SwiperSlide key={pacage.id}>
                <h5 className="mb-4">{selectedLanguage === "en" ? pacage.name_en : pacage.name_ar}</h5>
                <p className="descend mb-4">{t("price")} {pacage.price}</p>
                <h4 className="mb-3">{t("price")} {pacage.discount_price}</h4>
                <p>{selectedLanguage === "en" ? pacage.notes_en : pacage.notes_ar}</p>
                <p>{t("expire_date")} {pacage.expire_date}</p>
                <button className="btn btn_next" onClick={() => handleSubmit(pacage.id)}>
                  {t("buy_bacge_btn")}
                </button>
              </SwiperSlide>
            );
          })
        ) : (
          <h4 style={{marginTop:"-2rem"}}>{t("no_balance")}</h4>
        )}
      </Swiper>
    </>
  );
}
