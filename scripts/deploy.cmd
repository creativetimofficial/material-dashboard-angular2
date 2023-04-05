

call npm run build-prod
call aws s3 rm s3://app.project-osiris.net/ --recursive
call aws s3 cp .\dist\ s3://app.project-osiris.net --recursive
call aws cloudfront create-invalidation --distribution-id EAC73JN7BAGQ6 --paths "/index.html"
