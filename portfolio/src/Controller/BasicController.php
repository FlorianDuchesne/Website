<?php

namespace App\Controller;

use App\Entity\About;
use App\Entity\Competences;
use App\Entity\Curriculum;
use App\Repository\AboutRepository;
use App\Repository\CompetencesRepository;
use App\Repository\CurriculumRepository;
use App\Repository\ExperiencesRepository;
use App\Repository\FormationsRepository;
use App\Repository\ProjetRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BasicController extends AbstractController
{
    /**
     * @Route("/", name="app_basic")
     */
    public function index(AboutRepository $aboutRepo, 
    CompetencesRepository $compRepo, 
    CurriculumRepository $cvRepo, 
    ExperiencesRepository $expRepo,
    FormationsRepository $formRepo,
    ProjetRepository $projetRepo): Response
    {
        $about = $aboutRepo->findOneBy([],['id' => 'DESC']);
        $competences = $compRepo->findAll();
        $cv = $cvRepo->findOneBy([],['id' => 'DESC']);
        $exp = $expRepo->findAll();
        $formations = $formRepo->findAll();
        $projets = $projetRepo->findAll();

        return $this->render('/portfolio.html.twig', [
            'about' => $about,
            'competences' => $competences,
            'cv' => $cv,
            'experiences' => $exp,
            'formations' => $formations,
            'projets' => $projets
        ]);
    }
}
