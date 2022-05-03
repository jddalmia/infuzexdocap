import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { AddProductReviewAction } from "../actions/doctoraction";
import './review.css'

const ReviewComponent = ({ doctors }) => {

    const dispach = useDispatch()




    const [comment, setcomment] = useState('')


    const senreview = () => {

        if (localStorage.getItem('currentuser')) {
            const currentuser = JSON.parse(localStorage.getItem('currentuser'))

            let alreadyreviewd

            for (var i = 0; i < doctors.reviews.length; i++) {
                if (doctors.reviews[i].userid == currentuser._id) {
                    alreadyreviewd = true
                }
            }

            if (alreadyreviewd) {
                //alert(`You've already reviewed this product`)
                document.getElementById('post-button').innerHTML = `You've Already Reviewed`
            }
            else {

                const review = {
                    comment: comment
                }





                dispach(AddProductReviewAction(review, doctors._id))

            }

        }




    }





    return (
        <div>


            <h2> Tell About Your experience  </h2>

            <div className='grid-box' >

                <input type="text" value={comment} onChange={(e) => { setcomment(e.target.value) }} className='grid-part1'

                    style={{
                        marginLeft: '10%'

                    }}

                ></input>

                <button onClick={senreview} className='docdes-box1' style={{
                    backgroundColor: '#0EB9B8',

                    color: 'white',
                    width: '25%',
                    marginLeft: '15%'



                }} id='post-button'  > Post </button>



            </div>















            <h2> PATIENT REVIEWS </h2>

            {

                doctors.reviews && doctors.reviews.map(rev => {
                    return <div>

                        <div className='doc-grid' style={{
                            border: '0.7px solid black', width: '90%',
                            marginRight: 'auto', marginLeft: 'auto'


                        }} >
                            <p  >
                                <i class="fa fa-user"

                                    id='user-icon'

                                    aria-hidden="true"></i>

                            </p>

                            <p style={{ marginLeft: '15px', marginTop: '-10px', float: 'left' }} >
                                <h2 className='doc-name' >{rev.name} </h2>
                                <br />

                                <p className='doc-field' > {rev.comment} </p>


                                <p className='doc-exp' > On : {rev.updatedAt.substring(0, 10)} </p>




                            </p>





                        </div>



                    </div>

                })

            }
            <br />



        </div>
    )


}

export default ReviewComponent;