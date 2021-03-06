import React from 'react';
import '../Main/MainBo.scss';
// import '.././../Styles/Common.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faComment,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import {
  faArrowUpFromBracket,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Nav from '../../../components/Nav/Nav';

const Main = () => {
  return (
    <div>
      <Nav />
      <main className="main">
        <div className="main_container">
          <div className="main_feeds_left">
            <div className="feeds_left_box">
              <div className="left_box_title">
                <div className="feeds_img_box">
                  <img
                    alt="profile"
                    src="/image/boyoonKim/01.jpg"
                    className="profile_img"
                  />
                </div>
                <div className="profile_info">
                  <p className="profile_id">bboyooning</p>
                </div>
                <button type="button" className="feedAddBtn">
                  <img
                    alt="feedAddIcon"
                    src="/image/boyoonKim/add_icon.png"
                    className="feedAddIcon"
                  />
                </button>
              </div>
              <div className="box_mid">
                <img alt="feed_img" src="/image/boyoonKim/02.jpg" />
              </div>
              <div className="box_bottom">
                <div className="box_icons">
                  <ul className="icons_list">
                    <li>
                      <button type="button" className="state_btn">
                        <FontAwesomeIcon icon={faHeart} />
                      </button>
                    </li>
                    <li>
                      <button type="button" className="state_btn">
                        <FontAwesomeIcon icon={faComment} flip="horizontal" />
                      </button>
                    </li>
                    <li>
                      <button type="button" className="state_btn">
                        <FontAwesomeIcon icon={faArrowUpFromBracket} />
                      </button>
                    </li>
                    <ul class="icons_list_bookmark">
                      <button type="button" class="state_btn bookmark">
                        <FontAwesomeIcon icon={faBookmark} />
                      </button>
                    </ul>
                  </ul>
                </div>
                <div className="box_comments">
                  <div className="likes_comments">
                    <div className="likes_user">
                      <img
                        alt="profile"
                        src="/image/boyoonKim/03.jpg"
                        className="profile_img"
                      />
                    </div>
                    <div className="comments_info">
                      <p className="comments_title">
                        <span className="user_id_span">bboyooning</span>???
                        <span>&nbsp;???</span>
                        <span className="likes_num">&nbsp;10???</span>???
                        ???????????????
                      </p>
                    </div>
                  </div>
                  <div className="comments_list">
                    <ul className="comments_info_ul">
                      <li>
                        <div className="comments_title">
                          <span className="user_id">?????????</span>
                          <span className="comments_contents">
                            ?????? ????????? ????????? ??????
                          </span>
                          <button type="button" className="comment_btn">
                            ?????????
                          </button>
                        </div>
                        <div className="comments_title_line">
                          <div>
                            <span className="user_id">?????????</span>
                            <span className="comments_contents">
                              ???????????? ??? ???!
                            </span>
                          </div>
                          <button type="button">
                            <FontAwesomeIcon icon={faHeart} />
                          </button>
                        </div>
                        <div className="main_left_box_comment"></div>
                      </li>
                    </ul>
                  </div>
                  <div className="feeds_time">
                    <p className="time">42??? ???</p>
                  </div>
                  <div className="comments_div">
                    <input type="text" placeholder="?????? ??????..." />
                    <button type="button">??????</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main_feeds_right">
            <div>
              <div className="right_box_title">
                <div className="feeds_profile">
                  <div className="feeds_box">
                    <img
                      alt="profile"
                      src="/image/boyoonKim/04.jpg"
                      className="profile_img"
                    />
                  </div>
                  <div className="profile_info">
                    <p className="profile_id">wecode</p>
                    <p className="profile_introduce">?????????</p>
                  </div>
                </div>
              </div>
              <div className="story_box box_tool">
                <div className="box_contents">
                  <div className="box_top">
                    <span className="story_title ">?????????</span>
                    <span className="more_info">
                      <a href="#">?????? ??????</a>
                    </span>
                  </div>
                  <div className="box_list">
                    <ul>
                      <li className="story_list_li box_list_li">
                        <div className="img_box">
                          <img
                            alt="profile"
                            src="/image/boyoonKim/05.jpg"
                            className="profile_img"
                          />
                        </div>
                        <div className="profile_info">
                          <p className="profile_id">?????????</p>
                          <p className="profile_introduce">16??????</p>
                        </div>
                      </li>
                      <li className="story_list_li box_list_li">
                        <div className="img_box">
                          <img
                            alt="profile"
                            src="/image/boyoonKim/06.jpg"
                            className="profile_img"
                          />
                        </div>
                        <div className="profile_info">
                          <p className="profile_id">?????????</p>
                          <p className="profile_introduce">16??????</p>
                        </div>
                      </li>
                      <li className="story_list_li box_list_li">
                        <div className="img_box">
                          <img
                            alt="profile"
                            src="/image/boyoonKim/07.jpg"
                            className="profile_img"
                          />
                        </div>
                        <div className="profile_info">
                          <p className="profile_id">?????????</p>
                          <p className="profile_introduce">16??????</p>
                        </div>
                      </li>
                      <li className="story_list_li box_list_li">
                        <div className="img_box">
                          <img
                            alt="profile"
                            src="/image/boyoonKim/08.jpg"
                            className="profile_img"
                          />
                        </div>
                        <div className="profile_info">
                          <p className="profile_id">?????????</p>
                          <p className="profile_introduce">16??????</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="recommend_box box_tool">
                <div className="box_contents">
                  <div className="box_top">
                    <span className="recommend-title">???????????? ?????? ??????</span>
                    <span className="more_info">
                      <a href="#">?????? ??????</a>
                    </span>
                  </div>
                  <div className="recommend_list box_list">
                    <ul>
                      <li className="recommend_list_li box_list_li">
                        <div className="img_box">
                          <img
                            alt="profile"
                            src="/image/boyoonKim/09.jpg"
                            className="profile_img"
                          />
                        </div>
                        <div className="profile_info">
                          <p className="profile_id">?????????</p>
                          <p className="profile_introduce">
                            ????????? ??? 2?????? ?????????
                          </p>
                        </div>
                        <div className="follow_btn">
                          <button type="button" className="btn">
                            ?????????
                          </button>
                        </div>
                      </li>
                      <li className="recommend_list_li box_list_li">
                        <div className="img_box">
                          <img
                            alt="profile"
                            src="/image/boyoonKim/10.jpg"
                            className="profile_img"
                          />
                        </div>
                        <div className="profile_info">
                          <p className="profile_id">?????????</p>
                          <p className="profile_introduce">
                            ????????? ??? 2?????? ?????????
                          </p>
                        </div>
                        <div className="follow_btn">
                          <button type="button" className="btn">
                            ?????????
                          </button>
                        </div>
                      </li>
                      <li className="recommend_list_li box_list_li">
                        <div className="img_box">
                          <img
                            alt="profile"
                            src="/image/boyoonKim/02.jpg"
                            className="profile_img"
                          />
                        </div>
                        <div className="profile_info">
                          <p className="profile_id">?????????</p>
                          <p className="profile_introduce">
                            ????????? ??? 2?????? ?????????
                          </p>
                        </div>
                        <div className="follow_btn">
                          <button type="button">?????????</button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <footer className="footer">
                <span>?? 2022. Kim Bo Yoon. All rights reserved.</span>
              </footer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
