import { BrowserRouter, Route, Routes } from 'react-router-dom';

// LayOut
import Header from './components/LayOut/Header/Header';
import Footer from './components/LayOut/Footer/Footer';

// 로그인, 회원가입
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup/Signup';

// 메인페이지
import Main from './pages/Main';

// 글 목록
import PostList from './pages/PostList';

// 상세페이지
import Detail from './pages/DetailPage/Detail';

// 새글작성
import QuestionsNew from './pages/NewPost/QuestionsNew';
import EventsNew from './pages/NewPost/EventsNew';
import KnowledgeNew from './pages/NewPost/KnowledgeNew';

// 활동내역
import UserActivities from './components/UserActivities';

// 내 프로필
import Settings from './pages/Settings';

// 비밀번호 변경
import ChangePasswordConfirm from './pages/Settings/ProfileSetting/ChangePassWord/ChangePasswordConfirm';

// 회원 탈퇴
import SecessionTab from './pages/Settings/ProfileSetting/Secession/SecessionTab';
import JobsNew from './pages/NewPost/JobsNew';
import GlobalStyle from './styles/GlobalStyle';

export default function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<Main />} />

        {/* 상세페이지 */}
        <Route path="/articles/:id" element={<Detail />} />

        {/* 카테고리 */}
        {/* questions */}
        <Route path="questions/*" element={<PostList />} />
        {/* knowledge */}
        <Route path="knowledge/*" element={<PostList />} />
        {/* events */}
        <Route path="events/*" element={<PostList />} />
        {/* notice */}
        <Route path="notice/*" element={<PostList />} />
        {/* jobs */}
        <Route path="jobs/*" element={<PostList />} />

        {/* 새글작성 */}
        <Route path="/questions/new" element={<QuestionsNew />} />
        <Route path="/events/new" element={<EventsNew />} />
        <Route path="/knowledge/new" element={<KnowledgeNew />} />
        <Route path="/jobs/new" element={<JobsNew />} />

        {/* 내 프로필 */}
        <Route path="settings/*" element={<Settings />} />

        {/* 비밀번호 변경 */}
        <Route
          path="settings/password-changes"
          element={<ChangePasswordConfirm />}
        />

        {/* 회원 탈퇴 */}
        <Route path="/user/withdrawConfirm" element={<SecessionTab />} />

        {/* 활동 내역 */}
        <Route path="user/:id" element={<UserActivities />} />

        {/* 회원가입 페이지 */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
