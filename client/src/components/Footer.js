/* This example requires Tailwind CSS v2.0+ */
import {
  DownloadIcon
} from '@heroicons/react/outline'


import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Footer() {
  return (
    <footer>
        <div class="w-full bg-gray-500 text-white">
            <div class="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
                <div class="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start">
                    <div class="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
                        <p class="opacity-60">Just an average college student</p>
                    </div>
                    <div class="w-full sm:w-1/5 flex flex-col space-y-3">
                        <a href="#" class="flex flex-row opacity-60">
                            <LinkedInIcon/>
                            <a className="pl-4">
                                Linkedin
                            </a>
                        </a>
                        <a href="#" class="flex flex-row opacity-60">
                            <GitHubIcon />
                            <a className="pl-4">
                                Github
                            </a>
                        </a>
                    </div>
                    <div class="w-full sm:w-1/5 flex flex-col space-y-3">
                        <a href="#" class="flex flex-row opacity-60">
                            <EmailIcon/>
                            <a className="pl-4">
                                Email
                            </a>
                        </a>
                        <a href="#" class="flex flex-row opacity-60">
                            <DownloadIcon className="h-6 w-6"/>
                            <a className="pl-4">
                                Resume
                            </a>
                        </a>
                    </div>

                    <div class="w-full sm:w-1/5 pt-6 flex items-end mb-1">
                        <div class="flex flex-row space-x-4">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-google"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
