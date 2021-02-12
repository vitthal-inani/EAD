import React from 'react';

function PageNotFound() {
	return (
		<div class="auth">
		    <div class="auth_left">
		        <div class="card">
		            <div class="card-body">
		                <div class="display-3 text-muted mb-5"><i class="si si-exclamation"></i> 404</div>
		                <h1 class="h3 mb-3">Oops.. You just found an error page..</h1>
		                <p class="h6 text-muted font-weight-normal mb-3">We are sorry but our service is currently not available&hellip;</p>
		                <a class="btn btn-primary" href="javascript:history.back()">Go back</a>
		            </div>
		        </div>        
		    </div>
		    <div class="auth_right full_img"></div>
		</div>
	);	
};

export default PageNotFound;