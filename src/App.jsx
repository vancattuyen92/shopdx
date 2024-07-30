import './App.scss';
import logo from "./img/logo.jpeg"
import bg from "./img/bg.png"
import bg3 from "./img/bg3.png"
import dell1 from "./img/dell1.png"
import dell2 from "./img/dell2.png"
import dell3 from "./img/dell3.png"
import dell4 from "./img/dell4.png"
import dell5 from "./img/dell5.png"
import dell6 from "./img/dell6.png"
import productImage from "./img/file.png"
import productImage1 from "./img/file1.png"
import productImage2 from "./img/file2.png"
import productImage3 from "./img/file3.png"
import productImage4 from "./img/file4.png"
import productImage5 from "./img/file5.png"
import productImage6 from "./img/file6.png"
import { AudioOutlined } from '@ant-design/icons';
import { Descriptions, Input, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart,faCartShopping,faUser,faList,faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import digitex from "./img/digitex-logo.png"

library.add(faHeart,faCartShopping,faList,faChevronRight,faHeartRegular);
const { Search } = Input;
function App() {
  const products = [
    { id: 1, img: productImage, title: 'Dell XPS 16 9640', price: '1.500.000', description:'256, 8core GPU, 16 GB' },
    { id: 2, img: productImage1, title: 'Dell XPS 16 9640', price: '1.500.000', description:'256, 8core GPU, 16 GB'  },
    { id: 3, img: productImage2, title: 'Dell XPS 16 9640', price: '1.500.000', description:'256, 8core GPU, 16 GB'  },
    { id: 4, img: productImage6, title: 'Dell XPS 16 9640', price: '1.500.000', description:'256, 8core GPU, 16 GB'  },
    { id: 5, img: productImage, title: 'Dell XPS 16 9640', price: '1.500.000', description:'256, 8core GPU, 16 GB'  },
    { id: 6, img: productImage1, title: 'Dell XPS 16 9640', price: '1.500.000', description:'256, 8core GPU, 16 GB'  },
    { id: 7, img: productImage2, title: 'Dell XPS 16 9640', price: '1.500.000', description:'256, 8core GPU, 16 GB'  },
    { id: 8, img: productImage6, title: 'Dell XPS 16 9640', price: '1.500.000', description:'256, 8core GPU, 16 GB' },
    { id: 9, img: productImage, title: 'Dell XPS 16 9640', price: '1.500.000', description:'256, 8core GPU, 16 GB'  },
    { id: 10, img: productImage1, title: 'Dell XPS 16 9640', price: '1.500.000', description:'256, 8core GPU, 16 GB'  },
    { id: 11, img: productImage2, title: 'Dell XPS 16 9640', price: '1.500.000', description:'256, 8core GPU, 16 GB'  },
    { id: 12, img: productImage6, title: 'Dell XPS 16 9640', price: '1.500.000', description:'256, 8core GPU, 16 GB'  },
  ];
  function ProductCard({ img, title, price, reviews, description }) {
    const rating = Math.floor(reviews.rating);
    return (
      <div className="product-card">
        <div className="product-img-container">
          <img src={img} alt="Product" className="product-img" />
          <FontAwesomeIcon icon={faHeartRegular} className="heart-icon" />
        </div>
        <div className="product-info">
          <div className="info">
            <div className="product-title">{title}</div>
            <p className="product-price">
              {price.slice(0, -3)}<span className="price-small">{price.slice(-3)}</span>
            </p>
          </div>
          <p>{description}</p>
          <div className="rating-container">
          {/* Stars */}
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`star ${index < rating ? 'filled' : ''}`}
            >
              ★
            </span>
          ))}
          {/* Number of reviews */}
          <div className="reviews-count">({reviews.count})</div>
        </div>
        <div className="button-group">
          <button className="product-button">Thêm vào giỏ hàng</button>
          <button className="product-button buy-now">Mua ngay</button>
        </div>
        </div>
      </div>
    );
  }


  return (
    <div className="App">
      <div className="header">
        <div className="header-top container j-between">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="search">
            <Search placeholder="Tìm sản phẩm" enterButton size='large'/>
          </div>
          <div className="icon-group j-between">
            <FontAwesomeIcon icon={faHeart} className='icon' />
            <FontAwesomeIcon icon={faCartShopping} className='icon' />
            <FontAwesomeIcon icon={faUser} className='icon' />
          </div>
        </div>
        <div className="header-bottom">
          <div className="menu-menu container">
            <ul className="right-menu container j-between">
              <li><a href="#">Cửa hàng</a></li>
              <li><a href="#">Về ShopDX</a></li>
              <li><a href="#">Hỏi Đáp</a></li>
              <li><a href="#">Liên Hệ</a></li>
            </ul>
          </div>
          <div className="left-menu-menu container">
            <ul className='left-menu'>
              <li>
                <FontAwesomeIcon icon={faList} style={{marginRight: 5}}/>
                Tất cả sản phẩm
              </li>
              <li>Dịch vụ</li>
              <div className="line"></div>
              <li>Giải pháp</li>
              <div className="line"></div>
              <li>Hỗ trợ</li>
              <div className="line"></div>
              <li>Laptop <FontAwesomeIcon icon={faChevronRight} className='icon'/></li>
              <div className="line"></div>
              <li>Máy tính bàn <FontAwesomeIcon icon={faChevronRight} className='icon'/></li>
              <div className="line"></div>
              <li>Màn hình <FontAwesomeIcon icon={faChevronRight} className='icon'/></li>
              <div className="line"></div>
              <li>Phụ kiện <FontAwesomeIcon icon={faChevronRight} className='icon'/></li>
              <div className="line"></div>
              <li>Linh kiện <FontAwesomeIcon icon={faChevronRight} className='icon'/></li>
            </ul>
          </div>
          <div className="img-bg">
            <img src={bg3} alt="" />
            {/* <img src={digitex} alt="" className='digi'/> */}
            <div className='tagline'>CÔNG NGHỆ TIÊN TIẾN <div>GIÁ TRỊ ĐÍCH THỰC</div></div>
            <button className='shop-now'>Khám phá ngay</button>
          </div>
        </div>
      </div>

      <div className="best-selling part container">
        <h2>Sản Phẩm Yêu Thích</h2>
        <div className="scroll-container">
          <div className="scroll-wrapper">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                img={product.img}
                title={product.title}
                price={product.price}
                reviews={{ rating: 4.5, count: 120 }} 
                description={product.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="part container">
        <h2>Danh Mục Hot</h2>
        <div className="grid">
          <div className="item">
            <img src={dell1}/>
            <div className='title'>LAPTOP</div>
            <button>Xem Ngay</button>
          </div>
          <div className="item">
            <img src={dell2}/>
            <div className='title'>MÁY TÍNH</div>
            <button>Xem Ngay</button>
          </div>
          <div className="item">
            <img src={dell3}/>
            <div className='title'>MÀN HÌNH</div>
            <button>Xem Ngay</button>
          </div>
          <div className="item">
            <img src={dell4}/>
            <div className='title'>MÁY CHỦ</div>
            <button>Xem Ngay</button>
          </div>
          <div className="item">
            <img src={dell5}/>
            <div className='title'>MÁY TÍNH</div>
            <button>Xem Ngay</button>
          </div>
          <div className="item">
            <img src={dell6}/>
            <div className='title'>PHỤ KIỆN</div>
            <button>Xem Ngay</button>
          </div>
        </div>
      </div>

      <div className="best-selling part container">
        <h2>Sản Phẩm Nổi Bật</h2>
        <div className="j-between feature">
          <p className='bold'>Nổi bật <div className="bold-line"></div></p>
          <p>Mới nhất</p>
          <p>Bán chạy</p>
        </div>
        <div className="line"></div>
        <div className="scroll-container2">
          <div className="scroll-wrapper2">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                img={product.img}
                title={product.title}
                price={product.price}
                reviews={{ rating: 4.5, count: 120 }} 
                description={product.description}
              />
            ))}
          </div>
          <div className="button-see-more"><button className='see-more-button'>Xem thêm</button></div> 
        </div>
      </div>

      <div className="footer-bar j-between">
        <div className="left container">Đăng ký ngay để nhận thông tin mới nhất và khuyến mãi</div>
        <div className="right container search"><Search placeholder="Nhập email" enterButton="Đăng ký" size='large'/></div>
      </div>
      <div className="footer j-between">
        <div className="left container">
          <div className="logo"><img src={digitex} alt="" /></div>
          <h3>Công ty TNHH công nghệ số DigiTex</h3>
          <p>Văn phòng: Tòa nhà QTSC R&D Labs 1, Lô 45 đường số 14, Công viên phần mềm Quang Trung, P.Tân Chánh Hiệp, Q.12, Tp.Hồ Chí Minh</p>
          <p>Số điện thoại: 0931156636</p>
          <p>Email: cs@digitex.com</p>
        </div>
        <div className="right container j-between">
          <div className="column">
            <h3>CHÍNH SÁCH BÁN HÀNG</h3>
            <p>Điều khoản và điều kiện</p>
            <p>Chính sách bảo mật</p>
            <p>Chính sách bảo hành</p>
            <p>Đổi trả & hủy đơn hàng</p>            
          </div>
          <div className="column">
            <h3>HỖ TRỢ KHÁCH HÀNG</h3>
            <p>Điều khoản và điều kiện</p>
            <p>Chính sách bảo mật</p>
            <p>Chính sách bảo hành</p>
            <p>Đổi trả & hủy đơn hàng</p>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

