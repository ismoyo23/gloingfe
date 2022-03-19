import { Imagebackground } from "../../component/atom/ImageBackground";
import { Text } from "../../component/atom/Text";
import { Button } from "../../component/atom/Button";
import React, { useEffect } from "react";
const Product = () => {
  const [open, isOpen] = React.useState(true);

  useEffect(() => {
    window.addEventListener("scroll", scroll, true);
  }, []);
  let scroll = () => {
    if (window.scrollY > 186) {
    } else {
      console.log("ok");
    }
  };

  return (
    <div className="w-[100%] bg-[#F9F4EE] h-[auto] max-w-[100%]">
      <nav
        id="navbar"
        className="lg:flex lg:justify-between w-[100%] mt-[-90px] z-10 bg-[#F9F4EE] fixed"
      >
        <div className="flex justify-between  items-center px-4 py-4">
          <div
            style={{ whiteSpace: "nowrap" }}
            className="text-3xl ml-3 lg:ml-4 bold mt-1"
          >
            <Imagebackground
              size="manualy"
              inputSizeHeight="60px"
              inputSizeWidth="60px"
              radius={false}
              name="icon.svg"
            />
          </div>
          <div className="lg:hidden pt-2">
            {open ? (
              <button onClick={() => isOpen(!open)}>
                <Imagebackground
                  size="manualy"
                  inputSizeHeight="37px"
                  inputSizeWidth="114px"
                  radius={false}
                  name="Menu.svg"
                />
              </button>
            ) : (
              <button onClick={() => isOpen(!open)}>
                <Imagebackground
                  size="manualy"
                  inputSizeHeight="37px"
                  inputSizeWidth="114px"
                  radius={false}
                  name="Menu.svg"
                />
              </button>
            )}
          </div>
        </div>
        <div className="mt-[18px] ml-[auto]">
          <div
            className={open ? "hidden px-4 lg:block" : "block px-4 lg:block"}
          >
            <a
              href="#"
              style={{ whiteSpace: "nowrap", fontSize: "28px" }}
              className="font-sans duration-300 block mr-3 ml-3 lg:inline-block  rounded pr-2 pl-2 mt-3 hover:border-b-4 border-blue-200 pb-2 pt-1"
            >
              <Text
                weight="normal"
                size="small-default"
                styles={[]}
                font="Montserrat"
                label="Our Product"
              />
            </a>
            <a
              href="#"
              style={{ whiteSpace: "nowrap", fontSize: "28px" }}
              className="font-sans duration-300 block mr-3 ml-3 lg:inline-block rounded pl-2 pr-2 hover:border-b-4  mt-3 hover:border-b-4 border-blue-200 pb-2 pt-1"
            >
              <Text
                weight="normal"
                size="small-default"
                styles={[]}
                font="Montserrat"
                label="Afiliate Program"
              />
            </a>
            <a
              href="#"
              style={{ whiteSpace: "nowrap", fontSize: "28px" }}
              className="font-sans duration-300 block mr-3 ml-3 lg:inline-block rounded pl-2 pr-2  mt-3 hover:border-b-4 border-blue-200 pb-2 pt-1"
            >
              <Text
                weight="normal"
                size="small-default"
                styles={[]}
                font="Montserrat"
                label="Unicorn Metaverse"
              />
            </a>
            <a
              href="#"
              style={{ whiteSpace: "nowrap", fontSize: "28px" }}
              className="font-sans duration-300 block mr-3 ml-3 lg:inline-block rounded pl-2 pr-2  mt-3 hover:border-b-4 border-blue-200 pb-2 pt-1"
            >
              <Text
                weight="normal"
                size="small-default"
                styles={[]}
                font="Montserrat"
                label="About Us"
              />
            </a>
            <a
              href="#"
              style={{ whiteSpace: "nowrap", fontSize: "28px" }}
              className="font-sans duration-300 block mr-3 ml-3 lg:inline-block rounded pl-2 pr-2  mt-3 hover:border-b-4 border-blue-200 pb-2 pt-1"
            >
              <Text
                weight="normal"
                size="small-default"
                styles={[]}
                font="Montserrat"
                label="ID"
              />
            </a>
          </div>
        </div>
      </nav>
      <div className="contrainer ml-9 mr-9">
        <div className="mt-[90px]  justify-left md:container md:mx-auto sm:justify-left md:justify-center lg:justify-center xl:justify-center w-[100%] flex">
          <div className=" items-center content-center mt-[120px]">
            <div className="flex justify-between w-[100%]">
              <Text
                weight="light"
                size="super-large-default"
                styles={[]}
                font="Montserrat"
                label="Join"
              />
              <Text
                weight="light"
                size="super-large-default"
                styles={[]}
                font="Montserrat"
                label="The"
              />
              <Text
                weight="light"
                size="super-large-primary"
                styles={[]}
                font="Montserrat"
                label="Beauty"
              />
            </div>
            <div className=" flex justify-between w-[100%] ">
              <Text
                weight="light"
                size="super-large-default"
                styles={[]}
                font="Montserrat"
                label="Of"
              />

              <Text
                weight="light"
                size="super-large-primary"
                styles={[]}
                font="Montserrat"
                label="gloINGVerse"
              />
            </div>
          </div>
        </div>
        <div className=" mt-[20px]  xs:mt[10px] iphone12promax:mt-[10px] md:mt-[10px] lg:mt-[10px] xl:mt-[10px] justify-left xs:container md:container md:mx-auto sm:justify-left md:justify-center lg:justify-center w-[100%] flex">
          <div className="absolute items-center content-center w-[90%]  xs:mt[90%] md:w-[40%] lg:mt-[w-90%] xs:ml-[0px] md:ml-[0px] lg:ml-[185px]">
            <Text
              weight="normal"
              size="intermediate-default"
              styles={[]}
              font="Hind Madurai"
              label="Bayangkan selain manfaat kecantikan dan kesehatan kulit anda juga bisa mendapatkan bonus penghasilan dari produk kami, mari bergabung dan mulai kesuksesan anda bersama"
            />
            <div>
              <Text
                weight="normal"
                size="intermediate-primary"
                styles={[]}
                font="Hind Madurai"
                label="gloiNG"
              />
            </div>
            <div className="mt-[23px]">
              <Button
                primary={true}
                size="windows"
                label="Mulai menjadi member"
              />
            </div>
          </div>
        </div>

        <div className="flex content-around justify-center mt-[310px]">
          <div className="bg-cover md:bg-[url('https://raw.githubusercontent.com/ismoyo23/imagegloing/b069fe5f51cba3f6cd9a781453c10d38d03bd15e/image2.svg')] bg-[url('https://raw.githubusercontent.com/ismoyo23/imagegloing/94f90109ac6595340200ac5b9935349219fe0769/image2phone.svg')]">
            <div className=" w-[100%]">
              <div className="z-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 w-[100%]">
                <div className="justify-center items-center contents-center flex w-[100%] mt-[100px] md:mt-[100px] mb-[100px]">
                  <Imagebackground
                    size="manualy"
                    inputSizeHeight="37px"
                    inputSizeWidth="114px"
                    radius={false}
                    name="playIcon.svg"
                  />
                </div>

                <div className="bg-[#0A2B32]/50  bg-cover md:mt-[0] h-[100%] mb-[90px]">
                  <div className="flex justify-center contents-center mt-[50px]">
                    <Imagebackground
                      name="petik.svg"
                      size="manualy"
                      inputSizeHeight="37px"
                      inputSizeWidth="114px"
                      radius={false}
                    />
                  </div>
                  <div className=" flex justify-center contents-center items-center mt-[30px]">
                    <div className="w-[100%] h-[auto] max-h-[100%]">
                      <Text
                        weight="normal"
                        size="medium-white"
                        styles={["text-center", "md:text-[24px]"]}
                        font="Montserrat"
                        label="Not Just Beauty and Health, We’re Step Forward beyond them beyond them"
                      />
                    </div>
                  </div>
                  <div className="w-full flex justify-center contents-center items-center mt-[40px]">
                    <Button
                      primary={true}
                      size="windows"
                      label="More About Us"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:ml-[50px] ">
            <div className=" mt-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
              <Text
                weight="normal"
                size="intermediate-large-default"
                styles={[]}
                font="Montserrat"
                label="Who We Are ?"
              />
              <Text
                weight="normal"
                size="medium-default"
                styles={["font-[38px]"]}
                font="Hind Madurai"
                label="Sama seperti nama kami, kami hadir untuk menjadi pionir di bidang kesehatan dan kecantikan. Kami memiliki visi untuk memberikan manfaat dengan produk kecantikan yang berkualitas serta membantu komunitas kami untuk mendapatkan penghasilan dengan mudah tanpa harus memiliki modal besar."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#084956]  w-[100%] h-[100%] mt-[80px]">
        <div className="ml-9 mr-9">
          <div className="justify-center xs:justify-left flex contens-center item-center">
            <div className="mt-[100px]">
              <Text
                weight="normal"
                size="large-white"
                styles={["text-left", "md:text-center"]}
                font="Montserrat"
                label="Start With"
              />
              <Text
                weight="normal"
                size="large-primary"
                styles={["text-left", "md:text-center"]}
                font="Montserrat"
                label="gloiNGverse"
              />
              <div className="justify-left md:justify-center flex contens-center item-center mt-[30px]">
                <Text
                  weight="normal"
                  size="intermediate-white"
                  styles={[
                    "text-left",
                    "md:text-center",
                    "w-[100%] md:w-[50%]",
                  ]}
                  font="Montserrat"
                  label="Bukan Hanya Produk Kecantikan, kami memberikan hal yang berbeda dengan menghadirkan pengalaman unik di dunia Virtual Tanpa Batas"
                />
              </div>
              <div className="justify-left md:justify-center flex contens-center item-center mt-[30px]">
                <Button primary={true} size="windows" label="Selengkapnya" />
              </div>
            </div>
          </div>

          <div className="flex content-around justify-centerh-[40px] mt-[110px]">
            <div className="bg-cover md:bg-[url('https://raw.githubusercontent.com/ismoyo23/imagegloing/c5d896de9fbcd4d990485a650b45cefa84b657d9/image92.svg')] bg-[url('https://raw.githubusercontent.com/ismoyo23/imagegloing/c5d896de9fbcd4d990485a650b45cefa84b657d9/image%2092phone.svg')]">
              <div className=" w-[100%]">
                <div className="z-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 w-[100%]">
                  <div className="justify-center items-center contents-center flex w-[100%] mt-[100px] md:mt-[100px] mb-[100px]">
                    <Imagebackground
                      size="manualy"
                      inputSizeHeight="37px"
                      inputSizeWidth="114px"
                      radius={false}
                      name="playIcon.svg"
                    />
                  </div>

                  <div className="bg-[#0A2B32]/50  bg-cover md:mt-[0] h-[100%] mb-[200px]">
                    <div className=" flex justify-center contents-center items-center mt-[30px]">
                      <div className=" w-[100%] h-[auto] max-h-[100%] ml-4 mr-4">
                        <Text
                          weight="normal"
                          size="medium-white"
                          styles={["md:text-[24px]"]}
                          font="Montserrat"
                          label="Selamat datang dimasa depan, Anda telah hadir di"
                        />

                        <div className="">
                          <Text
                            weight="normal"
                            size="medium-primary"
                            styles={["md:text-[36px]"]}
                            font="Montserrat"
                            label="gloiNGVerse"
                          />
                          <Text
                            weight="normal"
                            size="medium-white"
                            styles={["md:text-[24px]"]}
                            font="Montserrat"
                            label="Comunity"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[400px]"></div>
      </div>
    </div>
  );
};

export default Product;
