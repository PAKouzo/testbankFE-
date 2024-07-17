import React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout/layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Questions = () => {
  const [question, setQuestions] = useState([]);
  const params = useParams();
  const [courses, setCourses] = useState([]);
<<<<<<< HEAD
=======
  const [id, setId] = useState('');
>>>>>>> dev2
  const navigate = useNavigate();

  //get all questions
  const getAllQuestions = async () => {
    try {
      const { data } = await axios.get('http://localhost:8080/api/question/get-questions');
      setQuestions(data.questions);
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  useEffect(() => {
    getAllQuestions();
  }, []);

  // get all courses
  const getAllCourses = async () => {
    try {
      const { data } = await axios.get('http://localhost:8080/api/course/courses');
      if (data?.success) {
        setCourses(data?.courses);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <Layout title="Dashboard - All Questions">
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1>All Questions</h1>
          <div className="d-flex flex-wrap">
            {question?.map((q) => (
              <div className="card m-2" style={{ width: '18rem' }}>
                <div className="card-body">
                  <Link
                    key={q.slug}
                    to={`/dashboard/admin/question/${q.slug}`}
                    className="question-link"
                  >
                    <h5 className="card-title">Môn học: {q.subject}</h5>
                    <h4 className="card-title">Khóa học: {q.course.name}</h4>
                    <p className="card-text">Chủ đề: {q.topic}</p>
                    <p className="card-text">Câu hỏi: {q.content}</p>
                  </Link>
                </div>
                <div className="flex-wrap" style={{ paddingLeft: '73px' }}>
                  <div className="mb-3">
<<<<<<< HEAD
                    <button
                      className="btn btn-info "
                      onClick={() => navigate(`/dashboard/admin/detail-question/${q.slug}`)}
                    >
                      Detail Question
                    </button>
=======
                    <button className="btn btn-info ">Detail Question</button>
>>>>>>> dev2
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Questions;