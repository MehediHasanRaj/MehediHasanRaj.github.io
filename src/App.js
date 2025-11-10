
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import './css/bootstrap.min.css';
import './css/style.css';
import FooterComponent from "./components/FooterComponent";

import HomeComponent from "./components/HomeComponent";
import {Routes, Route, Navigate} from 'react-router-dom';
import ContactComponent from "./components/ContactComponent";
import RecentProjectListComponent from "./components/RecentProjectListComponent";
import BlogDetailsComponent from "./components/BlogDetailsComponent";
import BlogListCardComponent from "./ListShowing/BlogListCardComponent";

import ProjectDetailsComponent from "./components/ProjectDetailsComponent";
import LoginComponent from "./components/LoginComponent";
import AuthProvider, {useAuth} from "./security/AuthContext";
import FormAddProjectCompont from "./components/ActionOnForms/FormAddProjectCompont";
import ErrorComponent from "./components/ErrorComponent";
import AdminComponent from "./components/ActionOnForms/AdminComponent";
import DeleteByIdComponent from "./components/ActionOnForms/DeleteByIdComponent";
import FormAddBlogComponent from "./components/ActionOnForms/FormAddBlogComponent";
import FormAddCertificateComponents from "./components/ActionOnForms/FormAddCertificateComponents";
import ContactListsComponents from "./components/ActionOnForms/ContactListsComponents";
import CertificateListsComponents from "./components/CertificateListComponents";
import ProfileComponent from "./components/ActionOnForms/ProfileComponent";
import SmartBankProjectDetails from "./components/projectsList/SmartBankProjectDetails";
import DynamicProgramming from "./components/blogLists/DynamicProgramming";

function AuthenticatedRoute({children}){
    const authContext = useAuth();
    console.log(authContext.isAuthenticated);
    if(authContext.isAuthenticated){
        return children
    }
    return <Navigate to={'/'} />
}

function App() {

  return (
    <div className="App">
        <AuthProvider>
            <HeaderComponent/>
                    <Routes>
                        <Route path="/" element={<HomeComponent/>}/>
                        <Route path="/contact" element={<ContactComponent/>}/>
                        <Route path="/project-list" element={<RecentProjectListComponent/>}/>
                        <Route path="/blog-details/:id" element={<BlogDetailsComponent/>}/>
                        <Route path="/blog" element={<BlogListCardComponent/>}/>
                        {/*<Route path="/test" element={<TestComponent/>}/>*/}
                        <Route path="/project-details/:id" element={<ProjectDetailsComponent/>}/>
                        <Route path="/certificate-lists" element={<CertificateListsComponents/>}/>

                        <Route path="/login" element={<LoginComponent/>}/>

                        {/*all projects list link*/}
                        <Route path="/smart-bank-project-details" element={<SmartBankProjectDetails/>}/>


                        {/*all blog list link*/}
                        <Route path="/dynamic-programming" element={<DynamicProgramming/>}/>

                        <Route path="/contact-lists" element={<AuthenticatedRoute><ContactListsComponents/></AuthenticatedRoute>}/>
                        <Route path="/add-blog" element={<AuthenticatedRoute><FormAddBlogComponent/></AuthenticatedRoute>}/>
                        <Route path="/add-certificate" element={<AuthenticatedRoute><FormAddCertificateComponents/></AuthenticatedRoute>}/>
                        <Route path="/add-project" element={<AuthenticatedRoute>
                            <FormAddProjectCompont/>
                        </AuthenticatedRoute>}/>
                        <Route path="/admin" element={<AuthenticatedRoute>
                            <AdminComponent/>
                        </AuthenticatedRoute>}/>
                        <Route path="/profile" element={<AuthenticatedRoute>
                            <ProfileComponent/>
                        </AuthenticatedRoute>}/>

                        <Route path="/delete" element={<AuthenticatedRoute>
                            <DeleteByIdComponent/>
                        </AuthenticatedRoute>}/>
                        <Route element={<ErrorComponent/>}/>
                    </Routes>
            <FooterComponent/>
        </AuthProvider>
    </div>
  );
}

export default App;
