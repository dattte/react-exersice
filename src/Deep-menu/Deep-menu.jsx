import '../Deep-menu/Style.css'

function Menu() {
  return (
    <div className="App">
      <div className="bg_menu-deep">
        <ul className="menu-deep_list">
          <li className="menu-deep_item">
            <a href="home" className="menu-deep_link">
              <span className="menu-deep_icon">
                <i className="fa fa-home"></i>
              </span>
              <span className="menu-deep_boxtext">
                <span className="menu-deep_text">Home</span>
                <span className="menu-deep_textsub">sweet home</span>
              </span>
            </a>
          </li>

          <li className="menu-deep_item menu-deep_active-pseudo relative">
            <a href="/about-us" className="menu-deep_link menu-deep_active">
              <span className="menu-deep_icon">
                <i className="fa fa-edit"></i>
              </span>
              <span className="menu-deep_boxtext">
                <span className="menu-deep_text">Home</span>
                <span className="menu-deep_textsub">About us</span>
              </span>
            </a>
          </li>

          <li className="menu-deep_item">
            <a href="/features" className="menu-deep_link">
              <span className="menu-deep_icon">
                <i className="fa fa-gift"></i>
              </span>
              <span className="menu-deep_boxtext">
                <span className="menu-deep_text">Features</span>
                <span className="menu-deep_textsub">sweet home</span>
              </span>
            </a>
          </li>

          <li className="menu-deep_item relative">
            <a href="/blog" className="menu-deep_link">
              <span className="menu-deep_icon">
                <i className="fad fa-comments"></i>
              </span>
              <span className="menu-deep_boxtext">
                <span className="menu-deep_text">Blog</span>
                <span className="menu-deep_textsub">what they say</span>
              </span>
            </a>
            <ul className="menu-dropdown_list">
              <li className="menu-deep_item">
                <a href="/blog/mission" className="menu-deep_link">
                  <span className="menu-deep_icon">
                    <i className="fa fa-globe"></i>
                  </span>
                  <span className="menu-deep_boxtext">
                    <span className="menu-deep_text">Mission</span>
                    <span className="menu-deep_textsub">undefined</span>
                  </span>
                </a>
              </li>
              <li className="menu-deep_item relative">
                <a href="/blog/our-team" className="menu-deep_link">
                  <span className="menu-deep_icon">
                    <i className="fas fa-users"></i>
                  </span>
                  <span className="menu-deep_boxtext">
                    <span className="menu-deep_text">Our Team</span>
                    <span className="menu-deep_textsub">undefined</span>
                  </span>
                </a>
                <ul className="menu-dropdown_list menu-deep_list">
                  <li className="menu-deep_item">
                    <a href="/blog/our-team/leyla-sparks" className="menu-deep_link">
                      <span className="menu-deep_icon">
                        <i className="fa fa-female"></i>
                      </span>
                      <span className="menu-deep_boxtext">
                        <span className="menu-deep_text">Leyla Sparks</span>
                        <span className="menu-deep_textsub">undefined</span>
                      </span>
                    </a>
                  </li>
                  <li className="menu-deep_item relative">
                    <a href="/blog/our-team/gleb-ismailov" className="menu-deep_link">
                      <span className="menu-deep_icon">
                        <i className="fa fa-male"></i>
                      </span>
                      <span className="menu-deep_boxtext">
                        <span className="menu-deep_text">Gleb Ismailov</span>
                        <span className="menu-deep_textsub">undefined</span>
                      </span>
                    </a>
                    <ul className="menu-dropdown_list">
                      <li className="menu-deep_item">
                        <a href="/blog/our-team/gleb-ismailov/about" className="menu-deep_link">
                          <span className="menu-deep_icon">
                            <i className="fa fa-leaf"></i>
                          </span>
                          <span className="menu-deep_boxtext">
                            <span className="menu-deep_text">About</span>
                            <span className="menu-deep_textsub">undefined</span>
                          </span>
                        </a>
                      </li>
                      <li className="menu-deep_item">
                        <a href="/blog/our-team/gleb-ismailov/skills" className="menu-deep_link">
                          <span className="menu-deep_icon">
                            <i className="fa fa-tasks"></i>
                          </span>
                          <span className="menu-deep_boxtext">
                            <span className="menu-deep_text">Skills</span>
                            <span className="menu-deep_textsub">undefined</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-deep_item">
                    <a href="/blog/our-team/viktoria-gibbers" className="menu-deep_link">
                      <span className="menu-deep_icon">
                        <i className="fa fa-female"></i>
                      </span>
                      <span className="menu-deep_boxtext">
                        <span className="menu-deep_text">Viktoria Gibbers</span>
                        <span className="menu-deep_textsub">undefined</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="menu-deep_item">
            <a href="/news" className="menu-deep_link">
              <span className="menu-deep_icon">
                <i className="fa fa-globe"></i>
              </span>
              <span className="menu-deep_boxtext">
                <span className="menu-deep_text">News</span>
                <span className="menu-deep_textsub">sweet home</span>
              </span>
            </a>
          </li>

          <li className="menu-deep_item">
            <a href="/portfolio" className="menu-deep_link">
              <span className="menu-deep_icon">
                <i className="far fa-image"></i>
              </span>
              <span className="menu-deep_boxtext">
                <span className="menu-deep_text">Portfolio</span>
                <span className="menu-deep_textsub">sweet home</span>
              </span>
            </a>
          </li>

          <li className="menu-deep_item">
            <a href="/contacts" className="menu-deep_link">
              <span className="menu-deep_icon">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="menu-deep_boxtext">
                <span className="menu-deep_text">Contacts</span>
                <span className="menu-deep_textsub">drop a line</span>
              </span>
            </a>
          </li>

          <li className="menu-deep_item">
            <div className="menu-deep_box">
              <input type="text" placeholder="Search...." className="menu-deep_search"/>
                <span className="menu-deep_search-icon">
                  <i className="fas fa-search"></i>
                </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
